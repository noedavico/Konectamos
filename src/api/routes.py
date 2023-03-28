
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, Users, User_info, Foto, Direccion, Categorias, Peques, Mayores, Mascota, Resenas, Valoracion
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_mail import Message
from werkzeug.utils import secure_filename

from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
import cloudinary

import random
import string
import app
import os

cloudinary.config(cloud_name=os.getenv('CLOUD_NAME'),
                  api_key=os.getenv('CLOUD_API_KEY'),
                  api_secret=os.getenv('CLOUD_API_SECRET'))



api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
# hacemos una consulta a la tabla para saber si el user existe
    user = Users.query.filter_by(email=email).first()
# si no existe devuelvo msg
    if user is None:
        return jsonify({"msg": "User dosn't exist"}), 404

    if user.check_password(password):
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token), 200

    return jsonify({"msg": "El usuario o la contraseña no coinciden"}), 404


# endpoint profile
@api.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():

    # Accede a la identidad del usuario actual con get_jwt_identity

    current_user = get_jwt_identity()
    user = Users.query.filter_by(email=current_user).first()

    return jsonify({"result": user.serialize()}), 200


@api.route("/validtoken", methods=["GET"])
@jwt_required()
def valid_token():
    # Access the identity of the current user with get_jwt_identity

    current_user = get_jwt_identity()

    user = Users.query.filter_by(email=current_user).first()
    if user != None:

        return jsonify({"isLogged": True}), 200
    else:
        return jsonify({"isLogged": False}), 401


# creacion de users
@api.route('/user', methods=['POST'])
def create_user():
    req_body = request.json
    message = "ya existe el usuario"
    status = 400
    user_query = Users.query.filter_by(email=req_body["email"]).first()

    if user_query is None:
        if (req_body.get("password") != None and
                len(req_body.get("password")) >= 8 and
                1 == 1):
            user = Users(
                email=req_body.get("email"),
                nombre=req_body.get("nombre"),
                apellido=req_body.get("apellido")
            )

            user.set_password(req_body.get("password"))

            db.session.add(user)
            db.session.commit()
            message = "el usuario se a creado con exito"
            status = 200

    response_body = {
        "msg": message

    }

    return jsonify(response_body), status


@api.route('/user_info', methods=['POST'])
@jwt_required()
def create_user_info():
    req_body = request.json
    current_user = get_jwt_identity()

    user = Users.query.filter_by(email=current_user).first()
    if (
        user != None and
        user.es_cuidador == True
    ):
        info_query = User_info.query.filter_by(user_id=user.id).first()

        # tabla user_info
        user_info = User_info(
            descripcion=req_body.get("descripcion"),
            experiencia=req_body.get("experiencia"),
            tarifa=req_body.get("tarifa"),
            plus_tarifa=req_body.get("plus_tarifa"),
            puntuacion_global=req_body.get("puntuacion_global"),
            cantidad_votos=req_body.get("cantidad_votos"),
            numero_telefono=req_body.get("numero_telefono"),
            fecha_nacimiento=req_body.get("fecha_nacimiento"),
            genero=req_body.get("genero"),
            educacion=req_body.get("educacion"),
            redes_sociales=req_body.get("redes_sociales"),
            tipo_servicios=req_body.get("tipo_servicios"),
            user_id=user.id,
            idiomas=req_body.get("idiomas"),
            aptitudes=req_body.get("aptitudes")
        )
        db.session.add(user_info)
        db.session.commit()

        user_info_query = User_info.query.filter_by(
            user_id=user.id).first()
        user_info_2 = Users.query.filter_by(id=user.id).first()

        response_body = {
            "msg": "ok",
            "result": "Datos añadidos al usuario"
        }

        return jsonify(response_body), 200
    return jsonify({"msg": "No se ha encontrado el usuario"}), 404


@api.route('/user_info', methods=['PUT'])
@jwt_required()
def update_user_info():
    req_body = request.json
    current_user = get_jwt_identity()

    user = Users.query.filter_by(email=current_user).first()
    if (
        user != None and
        user.es_cuidador == True
    ):
        info_query = User_info.query.filter_by(user_id=user.id).first()

        # tabla user_info
        info_query(
            descripcion=req_body.get("descripcion", user_info.descripcion),
            experiencia=req_body.get("experiencia", user_info.experiencia),
            tarifa=req_body.get("tarifa", user_info.tarifa),
            plus_tarifa=req_body.get("plus_tarifa", user_info.plus_tarifa),
            genero=req_body.get("genero", user_info.genero),
            educacion=req_body.get("educacion", user_info.educacion),
            puntuacion_global=req_body.get("puntuacion_global",
                                           user_info.puntuacion_global),
            cantidad_votos=req_body.get("cantidad_votos",
                                        user_info.cantidad_votos),
            numero_telefono=req_body.get("numero_telefono",
                                         user_info.numero_telefono),
            fecha_nacimiento=req_body.get("fecha_nacimiento",
                                          user_info.fecha_nacimiento),
            redes_sociales=req_body.get("redes_sociales",
                                        user_info.redes_sociales),
            tipo_servicios=req_body.get("tipo_servicios",
                                        user_info.tipo_servicios),
            user_id=user.id,
            idiomas=req_body.get("idiomas", user_info.idiomas),
            aptitudes=req_body.get("aptitudes", user_info.aptitudes)
        )
        db.session.add(user_info)
        db.session.commit()

        user_info_query = User_info.query.filter_by(
            user_id=user.id).first()
        user_info_2 = Users.query.filter_by(id=user.id).first()

        response_body = {
            "msg": "ok",
            "result": "Datos añadidos al usuario"
        }

        return jsonify(response_body), 200
    return jsonify({"msg": "No se ha encontrado el usuario"}), 404


@api.route('/subirfoto', methods=['POST'])
@jwt_required()
def foto():

    current_user = get_jwt_identity()

    if 'foto' not in request.files:
        return jsonify({'error': 'No se encontró ningún archivo'}), 400

    user_query = Users.query.filter_by(email=current_user).first()
    if not user_query:
        return jsonify({"msg": "No se ha encontrado el usuario"}), 404

    user_info_query = User_info.query.filter_by(user_id=user_query.id).first()
    if not user_info_query:
        return jsonify({"msg": "No se ha encontrado info del usuario"}), 404

    # obtener la foto de la solicitud
    foto = request.files['foto']

    if foto:
        upload_result = cloudinary.uploader.upload(foto)
        print(upload_result)
        url = upload_result["url"]

        # actualizar la columna de la base de datos con la nueva ruta
        foto_query = Foto.query.filter_by(
            foto_user_info=user_info_query.id).first()

        if not foto_query:
            foto = Foto(
                nombre=user_query.id,
                foto_imagen=upload_result["url"],
                foto_user_info=user_info_query.id
            )
            db.session.add(foto)
        else:
            foto_query.foto_imagen = url

        db.session.commit()

    # devolver la misma foto como respuesta
    return jsonify({"url": url}), 200


@api.route('/user/<int:id>/foto', methods=['GET'])
def get_user_foto(id):
    user_query = Users.query.filter_by(id=id).first()
    if not user_query:
        return jsonify({"msg": "No se ha encontrado el usuario"}), 404

    user_info_query = User_info.query.filter_by(user_id=user_query.id).first()
    if not user_info_query:
        return jsonify({"msg": "No se ha encontrado info del usuario"}), 404

    foto_query = Foto.query.filter_by(
        foto_user_info=user_info_query.id).first()
    if not foto_query:
        return jsonify({"msg": "No se ha encontrado la foto del usuario o no se ha subido"}), 404

    return jsonify({"foto": foto_query.serialize()}), 200



@api.route('/direccion', methods=['POST'])
@jwt_required()
def add_direccion():
    req_body = request.json
    current_user = get_jwt_identity()

    user_query = Users.query.filter_by(email=current_user).first()
    if not user_query:
        return jsonify({"msg": "No se ha encontrado el usuario"}), 404

    user_info_query = User_info.query.filter_by(user_id=user_query.id).first()

    if user_info_query == None:
        return jsonify({"msg": "No se ha encontrado info del usuario"}), 404

    direccion = Direccion(
        calle=req_body.get("calle"),
        codigo_postal=req_body.get("codigo_postal"),
        ciudad=req_body.get("ciudad"),
        provincia=req_body.get("provincia"),
        direccion_user_info=user_info_query.id
    )
    db.session.add(direccion)
    db.session.commit()
    return jsonify({"msg": "Se ha actualizado la direccion del usuario"}), 200


@api.route('/subcategoria', methods=['POST'])
@jwt_required()
def add_subcategoria():
    req_body = request.json
    current_user = get_jwt_identity()

    user_query = Users.query.filter_by(email=current_user).first()
    categoria = None
    if not user_query:
        return jsonify({"msg": "No se ha encontrado el usuario"}), 404

    user_cat = Categorias.query.filter_by(categorias_user=user_query.id)
    if not user_cat:
        return jsonify({"msg": "El usuario tiene una categoria"}), 401

    if user_query.es_cuidador == True and user_query.is_active == True:
        if (req_body['subCategoria'] == "mayores"):
            mayores = Mayores(
                servicios=req_body.get("servicios"),
                formacion=req_body.get("formacion")
            )
            db.session.add(mayores)
            db.session.commit()

            # se asocia mayores con user en la tabla categorias
            categoria = Categorias(
                mayores_id=mayores.id,
                categorias_user=user_query.id
            )
            db.session.add(categoria)
            db.session.commit()

        elif (req_body['subCategoria'] == "peques"):
            peques = Peques(
                servicios=req_body.get("servicios"),
                edades=req_body.get("edades"),
                formacion=req_body.get("formacion")
            )
            db.session.add(peques)
            db.session.commit()

            # se asocia peques con user en la tabla categorias
            categoria = Categorias(
                peques_id=peques.id,
                categorias_user=user_query.id
            )
            db.session.add(categoria)
            db.session.commit()

        elif (req_body['subCategoria'] == "mascotas"):
            mascota = Mascota(
                servicios=req_body.get("servicios"),
                tipo_animal=req_body.get("tipo_animal"),
                formacion=req_body.get("formacion")
            )
            db.session.add(mascota)
            db.session.commit()
            # se asocia mascota con user en la tabla categorias
            categoria = Categorias(
                mascota_id=mascota.id,
                categorias_user=user_query.id
            )
            db.session.add(categoria)
            db.session.commit()

        else:
            return jsonify({"msg": "Los datos no coinciden"}), 400

        db.session.commit()

        return jsonify({"msg": "Se ha actualizado la categoria del usuario"}), 200

    return jsonify({"msg": "El usuario no es profesional o esta inactivo"}), 400




@api.route('/getcategoria', methods=['GET'])
@jwt_required()
def get_categoria():
    req_body = request.json
    current_user = get_jwt_identity()

    user_query = Users.query.filter_by(email=current_user).first()
    categoria = None
    if not user_query:
        return jsonify({"msg": "No se ha encontrado el usuario"}), 404
    print()
    user_cat = Categorias.query.filter_by(categorias_user=user_query.id)
    
    if user_cat:
        return jsonify({"msg": "El usuario tiene una categoria"}), 401

    db.session.commit()

    return jsonify({"categoria": categoria_query.serialize2()}), 200

@api.route('/tipoUsuario', methods=['PUT'])
@jwt_required()
def set_es_cuidador():
    req_body = request.json
    current_user = get_jwt_identity()

    user = Users.query.filter_by(email=current_user).first()
    if not user:
        return jsonify({"msg": "No se ha encontrado el usuario"}), 404
    if req_body['tipo'] == "familia":
        user.es_cuidador = False
    elif req_body['tipo'] == "cuidador":
        user.es_cuidador = True
    else:
        return jsonify({"msg": "Los datos no coinciden"}), 400

    db.session.commit()

    return jsonify({"msg": "Se ha actualizado el tipo de usuario"}), 200


@api.route('/user_info/<int:user_id>', methods=['GET'])
def get_info_user(user_id):
    user_query = Users.query.filter_by(id=user_id).first()
    if user_query != None and user_query.is_active is True:
        info = user_query.user_info[-1]
        categoria_query = Categorias.query.filter_by(
            categorias_user=user_query.id).first()

        response = {}
        if info == None or categoria_query == None:

            if categoria_query != None:
                response = {
                    "msg": "ok",
                    "results": {
                        "datos": user_query.serialize(),
                        "categoria": categoria_query.serialize2()
                    }
                }
            elif info != None:
                response = {
                    "msg": "ok",
                    "results": {
                        "datos": user_query.serialize(),
                        "info": info.serialize()
                    }
                }
            else:
                response = {
                    "msg": "ok",
                    "results": {
                        "datos": user_query.serialize()
                    }
                }
        else:
            response = {
                "msg": "ok",
                "results": {"info": info.serialize(),
                            "datos": user_query.serialize(),
                            "categoria": categoria_query.serialize2()
                            }
            }
        return jsonify(response), 200
    else:
        return jsonify({"msg": "No se ha encontrado ningun usuario"}), 400


# obtiene los datos personales de un usuario
@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user_query = Users.query.filter_by(id=user_id).first()

    # querys o consultas
    response_body = {
        "msg": "ok",
        "result": user_query.serialize()
    }
    return jsonify(response_body), 200


@api.route("/loosepassword", methods=["POST"])
def loosepassword():
    recover_email = request.json['email']
    # se genera nueva contraseña aleatoria
    recover_password = ''.join(random.choice(
        string.ascii_uppercase +
        string.digits +
        string.ascii_lowercase +
        "!@#$*%&^") for x in range(8, 16))

    if not recover_email:
        return jsonify({"msg": "ingresar el correo"}), 401

    users = Users.query.filter_by(email=recover_email).first()

    if recover_email != users.email:
        return jsonify({"msg": "El correo no existe "}), 400

    # se guarda nueva contraseña aleatoria
    users.set_password(recover_password)

    db.session.commit()
    # Se envia contraseña al correo
    msg = Message("Recuperación de contaseña", recipients=[recover_email])
    msg.html = f"""<div style='display: flex; flex-flow: wrap column'>
    <img src='https://github.com/noedavico/proyecto-final/blob/develop/src/front/img/Log.png?raw=true'
    alt='Logo Konectamos' style='width: 30vmin;' />
    <h1>Konectamos</h1>
    </div>
    <p>Tu nueva contraseña es: <h2>{recover_password}</h2></p>"""

    current_app.mail.send(msg)
    return jsonify({"msg": "Nueva clave enviada al correo electrónico "}), 200

# obtiene los datos de todos los cuidadores


@api.route('/all_users', methods=['GET'])
def handle_all_user():
    # querys o consultas
    users_query = Users.query.all()
    result = list(map(lambda item: filtra_users(item), users_query))
    result = list(filter(None, result))

    response_body = {
        "msg": "ok",
        "results": result
    }

    return jsonify(response_body), 200


def filtra_users(user):
    info_query = User_info.query.filter_by(user_id=user.id).first()

    if info_query != None:

        direccion_query = Direccion.query.filter_by(
            direccion_user_info=info_query.id).first()
        foto_query = Foto.query.filter_by(
            foto_user_info=info_query.id).first()
        categoria_query = Categorias.query.filter_by(
            categorias_user=user.id).first()
        categoria = None
        foto = None
        ciudad = None

        if foto_query != None:
            foto = foto_query.serialize()

        if direccion_query != None:
            result_direccion = direccion_query.serialize()

            if result_direccion["ciudad"] == None:
                return
            ciudad = result_direccion["ciudad"]

        if categoria_query != None:
            result_categoria = categoria_query.serialize()
            if result_categoria["cat"] == None:
                return
            categoria = result_categoria["cat"]

        return {
            "nombre_completo": user.nombre + " " + user.apellido,
            "id": user.id,
            "descripcion": info_query.descripcion,
            "foto": foto,
            "ciudad": ciudad,
            "categoria": categoria
        }
    return
