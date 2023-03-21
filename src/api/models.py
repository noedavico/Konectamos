from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    
    created_at = db.Column(db.DateTime, nullable=False,default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)
    es_profesional = db.Column(db.Boolean(), unique=False)
    is_active = db.Column(db.Boolean(), default=True,unique=False, nullable=False)
    user_info = db.relationship('User_info',backref='user', lazy=True)
    categorias = db.relationship('Categorias',backref='user', lazy=True)
    #user_valoracion = db.relationship('Valoracion',backref='user', lazy=True)
    
    
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        result = {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            
            

        }
        
class User_info(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(120), unique=False, nullable=False)
    experiencia = db.Column(db.String(120), unique=False, nullable=False)
    tarifa = db.Column(db.Integer, unique=False, nullable=False)
    plus_tarifa = db.Column(db.Integer, unique=False, nullable=False)
    puntuacion_global = db.Column(db.Integer, unique=False, nullable=False)
    cantidad_votos = db.Column(db.Integer, unique=False, nullable=False)
    numero_telefono = db.Column(db.Integer, unique=False, nullable=False)
    fecha_nacimiento = db.Column(db.String(120), unique=False, nullable=False)
    direccion_perfil = db.Column(db.String, unique=False, nullable=False)
    genero = db.Column(db.String, unique=False, nullable=False)
    educacion = db.Column(db.String, unique=False, nullable=False)
    experiencia = db.Column(db.String, unique=False, nullable=False)
    #foto_perfil = db.Column(db.String, unique=False, nullable=False)
    tipo_servicios = db.Column(db.String, unique=False, nullable=False)
    redes_sociales = db.Column(db.String(120), unique=False, nullable=False)
    user_info_user = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_info_foto = db.relationship('Foto', backref='user_info', lazy=True)
    user_info_direccion = db.relationship('Direccion', backref='user_info', lazy=True)
    
    
    def __repr__(self):
        return f'<User_info {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "descripcion": self.descripcion,
            "experiencia": self.experiencia,
            "tarifa": self.precio_hora,
            "plus_tarifa": self.precio_hora,
            "puntuacion_global": self.puntuacion,
            "cantidad_votos": self.cantidad_votos,
            "numero_telefono": self.numero_telefono,
            "fecha_nacimiento": self.fecha_nacimiento,
            "direccion_perfil": self.direccion_perfil,
            "genero": self.genero,
            "educacion": self.educacion,
            "experiencia": self.experiencia,
            "foto_perfil": self.tipo_animales,
            "tipo_servicio": self.tipo_servicio,
            "redes_sociales": self.redes_sociales,
            
            
        }

class Foto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    foto_imagen = db.Column(db.Integer, unique=False, nullable=False)
    foto_user_info = db.Column(
        db.Integer, db.ForeignKey('user_info.id'), unique=True, nullable=False)
    
        
    def __repr__(self):
        return f'<Foto {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "foto_imagen": self.foto_imagen,
            
            }

class Direccion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    calle = db.Column(db.String(120), unique=False, nullable=False)
    codigo_postal = db.Column(db.String(120), unique=False, nullable=False)
    ciudad = db.Column(db.String(120), unique=False, nullable=False)
    direccion_user_info = db.Column(
         db.Integer, db.ForeignKey('user_info.id'), unique=True, nullable=False)
    
        
    
    
    def __repr__(self):
        return f'<Direccion {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "calle": self.calle,
            "codigo_postal": self.codigo_postal,
            "ciudad": self.ciudad,
            
            }
        
class Categorias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    peques_id = db.Column(db.Integer, db.ForeignKey('peques.id'))
    mascota_id = db.Column(db.Integer, db.ForeignKey('mascota.id'))
    mayores_id = db.Column(db.Integer, db.ForeignKey('mayores.id'))
    categorias_user = db.Column(
         db.Integer, db.ForeignKey('user.id'), unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Categorias {self.id}>'
    
    def serialize(self):
        return {
            
            "peques": self.peques,
            "mascotas": self.mascotas,
            "mayores": self.mayores,
            }
        
class Peques(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    servicio_adicional = db.Column(db.String(120), unique=False, nullable=False)
    edades = db.Column(db.String(120), unique=False, nullable=False)
    cualificacion = db.Column(db.String(120), unique=False, nullable=False)
    categorias = db.relationship('Categorias',backref='peques', lazy=True)
    
    def __repr__(self):
        return f'<Peques {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "servicio_adicional": self.servicio_adicional,
            "edades": self.edades,
            "cualificacion": self.cualificacion,
            
            }
        
class Mayores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    servicios = db.Column(db.String(120), unique=False, nullable=False)
    formacion = db.Column(db.String(120), unique=False, nullable=False)
    categorias = db.relationship('Categorias',backref='mayores', lazy=True)
    
    def __repr__(self):
        return f'<Mayores {self.id}>'
    
    def serialize(self):
        return {
            
            "servicios": self.servicios,
            "formacion": self.formacion,
            
            }
        
class Mascota(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tipo_animal = db.Column(db.String(120), unique=False, nullable=False)
    servicios = db.Column(db.String(120), unique=False, nullable=False)
    categorias = db.relationship('Categorias',backref='mascota', lazy=True)
    
    def __repr__(self):
        return f'<Mascota {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "tipo_animal": self.tipo_animal,
            "servicios": self.servicios,
            
            }
        
class Resenas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    opinion = db.Column(db.String(120), unique=False, nullable=False)
    titulo = db.Column(db.String(120), unique=False, nullable=False)
    data = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    puntuacion = db.Column(db.String(120), unique=False, nullable=False)
    resenas_valoracion = db.Column(db.Integer, db.ForeignKey('valoracion.id'),nullable=False)
    
    def __repr__(self):
        return f'<Resenas {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "opinion": self.opinion,
            "titulo": self.titulo,
            "data": self.data,
            "puntuacion": self.puntuacion,
            }
        
class Valoracion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_from_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_to_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    #user = db.relationship ("User",backref='valoracion', lazy=True) 
    user_from = db.relationship("User", foreign_keys=[user_from_id])
    user_to = db.relationship("User", foreign_keys=[user_to_id])
    # usuario_puntuado = db.relationship('Valoracion', backref = db.backref('user', order_by = id), 
    # primaryjoin = "user.id == valoracion.usuario_puntuado")
    # usuario_puntuador = db.relationship('Valoracion', 
    # primaryjoin = "user.id == valoracion.usuario_puntuador")
    resenas = db.relationship('Resenas',backref='valoracion', lazy=True)
    
    
    def __repr__(self):
        return f'<Valoracion {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            
            }