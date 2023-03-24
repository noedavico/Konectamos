
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
import random
import string


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
        return jsonify({"msg": "User dosn´t exist"}), 404
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


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
        user = User(email=req_body["email"],
                    password=req_body["password"],
                    nombre=req_body["nombre"],
                    apellido=req_body["apellido"],)

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
        user.user_info != None and
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
            user_id=user.id
        )
        db.session.add(user_info)
        db.session.commit()

        user_info_query = User_info.query.filter_by(
            user_id=user.id).first()
        user_info_2 = Users.query.filter_by(id=user.id).first()

        response_body = {
            "msg": "ok",
        }

        return jsonify(response_body), 200
    return jsonify({"msg": "No se ha encontrado el usuario"}), 404


@api.route('/foto', methods=['POST'])
@jwt_required()
def add_foto():
    req_body = request.json
    current_user = get_jwt_identity()

    user_query = Users.query.filter_by(email=current_user).first()
    if not user_query:
        return jsonify({"msg": "No se ha encontrado el usuario"}), 404

    user_info_query = User_info.query.filter_by(user_id=user_query.id).first()
    if user_info_query == None:
        return jsonify({"msg": "No se ha encontrado info del usuario"}), 404

    foto = Foto(
        nombre=req_body.get("foto_nombre"),
        foto_imagen=req_body.get("foto_imagen"),
        foto_user_info=user_info_query.id
    )
    db.session.add(foto)
    db.session.commit()
    return jsonify({"msg": "Se ha actualizado la foto de usuario"}), 200


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
                cualificacion=req_body.get("cualificacion")
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
                tipo_animal=req_body.get("tipo_animal")
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


@api.route('/tipoUsuario', methods=['PUT'])
@jwt_required()
def set_es_cuidador():
    req_body = request.json
    current_user = get_jwt_identity()

    user = Users.query.filter_by(email=current_user).first()
    if not user:
        return jsonify({"msg": "No se ha encontrado el usuario"}), 404
    if req_body['categoria'] == "familia":
        user.es_cuidador = False
    elif req_body['categoria'] == "cuidador":
        user.es_cuidador = True
    else:
        return jsonify({"msg": "Los datos no coinciden"}), 400

    db.session.commit()

    return jsonify({"msg": "Se ha actualizado el tipo de usuario"}), 200


@api.route('/informacion/<int:user_id>', methods=['GET'])
def set_info_user(user_id):
    user_query = Users.query.filter_by(id=user_id).first()
    if user_query != None and user_query.is_active is True:
        user_info_2 = Users.query.filter_by(id=user.id).first()

        print(user_info_2.serialize2())
        response_body = {
            "msg": "ok",
            "results": user_info_2.serialize2()
        }    
        return jsonify(response_body), 200
    else : 
        return jsonify({"msg":"No se ha encontrado"}), 404
    return jsonify({"msg":"No se ha encontrado"}), 404




@api.route('/user_info/<int:user_id>', methods=['GET'])
def set_info_user(user_id):
    user_query = Users.query.filter_by(id=user_id).first()
    if user_query != None and user_query.is_active is True:
        info = user_query.user_info[-1]
        
        response_body = {
            "msg": "ok",
            "results": {"info" : info.serialize(),
                        "datospersonales": user_query.serialize()
                        }
        }    
        return jsonify(response_body), 200
    else : 
        return jsonify({"msg":"No se ha encontrado"}), 400
        
# obtiene los datos de un usuario
@api.route('/user/<int:user_id>', methods=['GET'])
def get_info_user(user_id):
    user_query = Users.query.filter_by(id=user_id).first()
    print(user_query)
#querys o consultas
    response_body = {
        "msg": "ok",
        "result": user_query.serialize()
    }
    return jsonify(response_body), 200    
@api.route("/loosepassword", methods=["POST"])
def loosepassword():
    recover_email = request.json['email']
    #se genera nueva contraseña aleatoria 
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8))

    if not recover_email:
        return jsonify({"msg": "ingresar el correo"}), 401
    users = Users.query.filter_by(email=recover_email).first()
    if recover_email != users.email:
        return jsonify({"msg": "El correo no existe "}), 400
    #se guarda nueva contraseña aleatoria
    users.password = recover_password
    db.session.commit()
	#Se envia contraseña al correo 
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<h1>Nueva contraseña: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Nueva clave enviada al correo electrónico "}), 200
