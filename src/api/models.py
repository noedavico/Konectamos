from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from argon2 import PasswordHasher

ph = PasswordHasher()

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.Text, unique=False, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)
    es_cuidador = db.Column(db.Boolean(), unique=False)
    is_active = db.Column(db.Boolean(), default=True,
                          unique=False, nullable=False)
    user_info = db.relationship('User_info', backref='users', lazy=True)
    categorias = db.relationship('Categorias', backref='users', lazy=True)

    def __repr__(self):
        return f'<Users {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email,
        }

    def set_password(self, password):
        self.password = ph.hash(password)

    def check_password(self, password):
        try:
            return ph.verify(self.password, password)
        except argon2.exceptions.VerifyMismatchError:
            return False

    def serialize_cuidadores(self):

        if self.es_cuidador == True and self.is_active == True:
            query_categorias = Categorias.query.filter_by(
                user_id=self.id).first()
            query_user_info = User_info.query.filter_by(
                user_id=self.id).first()
            result_categorias = None
            result_user_info = None

            if query_categorias is None:
                result_categorias
            else:
                result_categorias = query_categorias.serialize()

            if query_user_info is None:
                result_user_info
            else:
                result_user_info = query_user_info.serialize()

            return {
                "id": self.id,
                "categoria": result_categorias,
                "info": result_user_info
            }

        return {}

    def serialize_resena(self):
        user_info_query = User_info.query.filter_by(user_id=self.id).first()
        foto_query = Foto.query.filter_by(
            foto_user_info=user_info_query.id).first()
        info = None
        foto = None

        if foto_query != None:
            foto = foto_query.serialize()

        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "foto": foto,

        }

    def serialize2(self):
        user_query = User_info.query.filter_by(user_id=self.id).first()

        return user_query.serialize()


class User_info(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.Text, unique=False, nullable=True)
    experiencia = db.Column(db.String(120), default="",
                            unique=False, nullable=True)
    tarifa = db.Column(db.Integer, unique=False, nullable=True)
    plus_tarifa = db.Column(db.Integer, unique=False, nullable=True)
    puntuacion_global = db.Column(db.Integer, unique=False, nullable=True)
    cantidad_votos = db.Column(db.Integer, unique=False, nullable=True)
    numero_telefono = db.Column(db.String(20), unique=False, nullable=True)
    fecha_nacimiento = db.Column(
        db.String(120), default="", unique=False, nullable=True)
    genero = db.Column(db.String(10), default="", unique=False, nullable=True)
    educacion = db.Column(db.String(255), default="",
                          unique=False, nullable=True)
    experiencia = db.Column(db.String(255), default="",
                            unique=False, nullable=True)
    tipo_servicios = db.Column(
        db.String(255), default="", unique=False, nullable=True)
    idiomas = db.Column(
        db.String(255), default="", unique=False, nullable=True)
    redes_sociales = db.Column(
        db.Text, default="", unique=False, nullable=True)
    aptitudes = db.Column(
        db.String(255), default="", unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user_info_foto = db.relationship('Foto', backref='user_info', lazy=True)
    user_info_direccion = db.relationship(
        'Direccion', backref='user_info', lazy=True)

    def __repr__(self):
        return f'<User_info {self.id}>'

    def serialize(self):
        query_foto = Foto.query.filter_by(
            foto_user_info=self.id).first()
        query_direccion = Direccion.query.filter_by(
            direccion_user_info=self.id).first()
        result_foto = None
        result_direccion = None

        if query_foto != None:
            result_foto = query_foto.serialize()

        if query_direccion != None:
            result_direccion = query_direccion.serialize()

        return {
            "id": self.id,
            "descripcion": self.descripcion,
            "experiencia": self.experiencia,
            "tarifa": self.tarifa,
            "plus_tarifa": self.plus_tarifa,
            "puntuacion_global": self.puntuacion_global,
            "cantidad_votos": self.cantidad_votos,
            "telefono": self.numero_telefono,
            "fecha_nacimiento": self.fecha_nacimiento,
            "genero": self.genero,
            "educacion": self.educacion,
            "experiencia": self.experiencia,
            "servicios": self.tipo_servicios,
            "redes": self.redes_sociales,
            "foto": result_foto,
            "direccion": result_direccion,
            "idiomas": self.idiomas,
            "aptitudes": self.aptitudes
        }


class Foto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), unique=False, nullable=True)
    foto_imagen = db.Column(db.String(255), unique=False, nullable=True)
    foto_user_info = db.Column(
        db.Integer, db.ForeignKey('user_info.id'), unique=True, nullable=True)

    def __repr__(self):
        return f'<Foto {self.id}>'

    def serialize(self):
        return {
            "nombre": self.nombre,
            "foto_imagen": self.foto_imagen,
        }


class Direccion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    calle = db.Column(db.String(120), unique=False, nullable=True)
    codigo_postal = db.Column(db.String(120), unique=False, nullable=True)
    ciudad = db.Column(db.String(255), unique=False, nullable=True)
    provincia = db.Column(db.String(120), unique=False, nullable=True)
    direccion_user_info = db.Column(
        db.Integer, db.ForeignKey('user_info.id'), unique=True, nullable=True)

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
    peques_id = db.Column(db.Integer,
                          db.ForeignKey('peques.id'), unique=False, nullable=True)
    mascota_id = db.Column(db.Integer,
                           db.ForeignKey('mascota.id'), unique=False, nullable=True)
    mayores_id = db.Column(db.Integer,
                           db.ForeignKey('mayores.id'), unique=False, nullable=True)
    categorias_user = db.Column(
        db.Integer, db.ForeignKey('users.id'), unique=False, nullable=True)

    def __repr__(self):
        return f'<Categorias {self.id}>'

    def serialize(self):
        result = {}
        if self.peques_id != None:
            peque = Peques.query.filter_by(id=self.peques_id).first()
            result = {
                "cat": "peques",
                "result": peque.serialize()
            }

        if self.mayores_id != None:
            mayores = Mayores.query.filter_by(id=self.mayores_id).first()
            result = {
                "cat": "mayores",
                "result": mayores.serialize()
            }

        if self.mascota_id != None:
            mascota = Mascota.query.filter_by(id=self.mascota_id).first()
            result = {
                "cat": "mascota",
                "result": mascota.serialize()
            }

        return result

    def serialize2(self):
        result = {}
        if self.peques_id != None:
            peque = Peques.query.filter_by(id=self.peques_id).first()
            result = peque.serialize()

        if self.mayores_id != None:
            mayores = Mayores.query.filter_by(id=self.mayores_id).first()
            result = mayores.serialize()

        if self.mascota_id != None:
            mascota = Mascota.query.filter_by(id=self.mascota_id).first()
            result = mascota.serialize()

        return result

    def categoria(self):
        if self.peques_id != None:
            return "peques"

        elif self.mayores_id != None:
            return "mayores"

        elif self.mascota_id != None:
            return "mascota"
        else:
            return ""


class Peques(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    servicios = db.Column(db.String(255), unique=False, nullable=True)
    edades = db.Column(db.String(120), unique=False, nullable=True)
    formacion = db.Column(db.String(255), unique=False, nullable=True)
    categorias = db.relationship('Categorias', backref='peques', lazy=True)

    def __repr__(self):
        return f'<Peques {self.id}>'

    def serialize(self):
        return {
            "servicios": self.servicios,
            "edades": self.edades,
            "formacion": self.formacion,
        }


class Mayores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    servicios = db.Column(db.String(255), unique=False, nullable=True)
    formacion = db.Column(db.String(120), unique=False, nullable=True)
    categorias = db.relationship('Categorias', backref='mayores', lazy=True)

    def __repr__(self):
        return f'<Mayores {self.id}>'

    def serialize(self):
        return {
            "servicios": self.servicios,
            "formacion": self.formacion,
        }


class Mascota(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    servicios = db.Column(db.String(255), unique=False, nullable=True)
    tipo_animal = db.Column(db.String(120), unique=False, nullable=True)
    formacion = db.Column(db.String(120), unique=False, nullable=True)
    categorias = db.relationship('Categorias', backref='mascota', lazy=True)

    def __repr__(self):
        return f'<Mascota {self.id}>'

    def serialize(self):
        return {
            "tipo_animal": self.tipo_animal,
            "servicios": self.servicios,
            "formacion": self.formacion,

        }


class Resenas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    opinion = db.Column(db.String(120), unique=False, nullable=True)
    titulo = db.Column(db.String(120), unique=False, nullable=True)
    data = db.Column(db.DateTime, nullable=True,
                     default=datetime.utcnow)
    puntuacion = db.Column(db.String(120), unique=False, nullable=True)
    resenas_valoracion = db.Column(
        db.Integer, db.ForeignKey('valoracion.id'), nullable=False)

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
    user_from_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    user_to_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    user_from = db.relationship("Users", foreign_keys=[user_from_id])
    user_to = db.relationship("Users", foreign_keys=[user_to_id])
    resenas = db.relationship('Resenas', backref='valoracion', lazy=True)

    def __repr__(self):
        return f'<Valoracion {self.id}>'

    def serialize(self):

        user_from_query = User.query.filter_by(id=self.user_from_id)
        user_to_query = User.query.filter_by(id=self.user_from_id)
        return {
            "id": self.id,
            "user_from": user_from_query.serialize_resena(),
            "user_to": user_to_query.serialize_resena(),
            "resena": self.resenas.serialize()
        }
