from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    #direccion = db.Column(db.String(120), unique=False, nullable=False)
    #ciudad = db.Column(db.String(120), unique=False, nullable=False)
    #codigo_postal = db.Column(db.Integer, unique=False, nullable=False)
    #telefono = db.Column(db.String(120), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    #foto_perfil = db.Column(db.String(120), unique=False, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)
    es_profesional = db.Column(db.Boolean(), unique=False)
    professional_user = db.relationship(
        'Professional', backref='user', uselist=False)
    is_active = db.Column(db.Boolean(), default=True,
                          unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        result = {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            #"direccion": self.direccion,
            #"ciudad": self.ciudad,
            #"codigo_postal": self.codigo_postal,
            #"telefono": self.telefono,
            "email": self.email,
            #"foto_perfil": self.foto_perfil,

        }
        
    def envio_basico(self):
        return {
            "nombre": self.nombre,
            "apellido": self.apellido
        }

        if self.es_profesional:
            # TODO extraer datos de professional
            result["profesional"] = "profesional"

        return result


class Professional(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(120), unique=False, nullable=False)
    experiencia = db.Column(db.String(120), unique=False, nullable=False)
    precio_hora = db.Column(db.String(120), unique=False, nullable=False)
    puntuacion = db.Column(db.String(120), unique=False, nullable=False)
    cantidad_votos = db.Column(db.Integer, unique=False, nullable=False)
    
    redes_sociales = db.Column(db.String(120), unique=False, nullable=False)
    professional_user = db.Column(
        db.Integer, db.ForeignKey('user.id'), unique=True, nullable=False)
    categoria_professional = db.relationship(
        'Categorias', backref='professional', lazy=True)

    def __repr__(self):
        return f'<Professional {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "descripcion": self.descripcion,
            "experiencia": self.experiencia,
            "precio_hora": self.precio_hora,
            "puntuacion": self.puntuacion,
            "cantidad_votos": self.cantidad_votos,
            
            "redes_sociales": self.redes_sociales,
            "categoria_id": self.categoria_id,
        }


class Categorias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    descripcion = db.Column(db.String(120), unique=False, nullable=False)
    professionals = db.Column(db.Integer, db.ForeignKey(
        'professional.id'), nullable=False)

    def __repr__(self):
        return f'<Categorias {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
        }
