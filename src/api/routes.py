"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, User_info, Foto, Direccion, Categorias, Peques, Mayores, Mascota, Resenas, Valoracion
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

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
    user = User.query.filter_by(email=email).first()
#si no existe devuelvo msg
    if user is None:
        return jsonify({"msg": "User dosn´t exist"}),404
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

#endpoint user /////
@api.route('/user', methods=['GET'])
def get_user():
    
##querys o consultas
    user_query = User.query.all()
    
    results = list(map(lambda item: item.serialize(),user_query))


    response_body = {
        "msg": "ok",
        "results": results
    }
    return jsonify(response_body), 200


@api.route('/user', methods=['POST'])
def create_user():
    request_body = request.json
    message = "ya existe el usuario"
    status = 400
    user_query = User.query.filter_by(email=request_body["email"]).first()

    if user_query is None:
        user = User(email=request_body["email"],
                    password=request_body["password"],
                    nombre=request_body["nombre"],
                    apellido=request_body["apellido"],
                    
                    )
        
        db.session.add(user)
        db.session.commit()
        message = "el usuario se a creado con exito"
        status = 200


    response_body = {
        "msg": message
        
    }

    return jsonify(response_body), status 

#endpoint profile
@api.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    
    #Accede a la identidad del usuario actual con get_jwt_identity

    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    
    
    return jsonify({"result":user.serialize()}), 200

#endpoint user_info/////
@api.route('/user_info', methods=['GET'])
def userinfo():
    
##querys o consultas
    users_info_query = User_info.query.all()
    
    results = list(map(lambda item: item.serialize(),users_info_query))


    response_body = {
        "msg": "ok",
        "results": results
    }
    return jsonify(response_body), 200

@api.route('/user_info', methods=['POST'])
def create_user_info():
    request_body = request.json
    message = "ya existe el usuario"
    status = 400
    user_info_query = User_info.query.filter_by(descripcion=request_body["descripcion"]).first()


    # if user_query is None:
    user_info = User_info(descripcion=request_body["descripcion"],
                experiencia=request_body["experiencia"],
                tarifa=request_body["tarifa"],
                plus_tarifa=request_body["plus_tarifa"],
                puntuacion_global=request_body["puntuacion_global"],
                cantidad_votos=request_body["cantidad_votos"],
                numero_telefono=request_body["numero_telefono"],
                fecha_nacimiento=request_body["fecha_nacimento"],
                direccion_perfil=request_body["direccion perfil"],
                genero=request_body["genero"],
                educacion=request_body["educacion"],
                tipos_servivios=request_body["tipos_servicios"],)
    
    db.session.add(user_info)
    db.session.commit()
    message = "la informacion del usuario fue creada"
    status = 200


    response_body = {
        "msg": message
        
    }

    return jsonify(response_body), status



#endpoint foto/////
@api.route('/foto', methods=['GET'])
def get_foto():
    
##querys o consultas
    foto_query = Foto.query.all()
    
    results = list(map(lambda item: item.serialize(),foto_query))


    response_body = {
        "msg": "ok",
        "results": results
    }
    return jsonify(response_body), 200


#endpoint direccion
@api.route('direccion', methods=['GET'])
def get_direccion():
    
##querys o consultas
    direccion_query = Direccion.query.all()
    
    results = list(map(lambda item: item.serialize(),direccion_query))


    response_body = {
        "msg": "ok",
        "results": results
    }
    return jsonify(response_body), 200


#endpoint peques/////
@api.route('/peques', methods=['GET'])
def get_peques():
    
##querys o consultas
    peques_query = Peques.query.all()
    
    results = list(map(lambda item: item.serialize(),peques_query))


    response_body = {
        "msg": "ok",
        "results": results
    }
    return jsonify(response_body), 200


@api.route('/peques', methods=['POST'])
def create_peques():
    request_body = request.json
    message = "ya existe el usuario"
    status = 400
    peques_query = Peques.query.filter_by(servicio_adicional=request_body["servicio_adicional"]).first()
    
    peques = Peques(servicio_adicional=request_body["servicio_adicional"],
                    edades=request_body["edades"],
                    cualificacion=request_body["cualificacion"],)
    
    db.session.add(peques)
    db.session.commit()
    message = "el peque se a creado con exito"
    status = 200


    response_body = {
        "msg": message
        
    }

    return jsonify(response_body), status


#endpoint mayores//////
@api.route('/mayores', methods=['GET'])
def get_mayores():
    
##querys o consultas
    mayores_query = Mayores.query.all()
    
    results = list(map(lambda item: item.serialize(),mayores_query))


    response_body = {
        "msg": "ok",
        "results": results
    }
    return jsonify(response_body), 200

@api.route('/mayores', methods=['POST'])
def create_mayores():
    request_body = request.json
    message = "ya existe el usuario"
    status = 400
    mayores_query = Mayores.query.filter_by(servicios=request_body["servicios"]).first()
    
    mayores = Mayores(servicios=request_body["servicios"],
                    formacion=request_body["formacion"],
                    )
    
    db.session.add(mayores)
    db.session.commit()
    message = "el viejo se a creado con exito"
    status = 200


    response_body = {
        "msg": message
        
    }

    return jsonify(response_body), status


#endpoint mascota
@api.route('/mascota', methods=['GET'])
def get_mascota():
    
##querys o consultas
    mascota_query = Mascota.query.all()
    
    results = list(map(lambda item: item.serialize(),mascota_query))


    response_body = {
        "msg": "ok",
        "results": results
    }
    return jsonify(response_body), 200

@api.route('/mascota', methods=['POST'])
def create_mascota():
    request_body = request.json
    message = "ya existe el usuario"
    status = 400
    mascota_query = Mascota.query.filter_by(tipo_animal=request_body["tipo_animal"]).first()
    
    mascota = Mascota(tipo_animal=request_body["tipo_animal"],
                    servicios=request_body["servicios"],
                    )
    
    db.session.add(mascota)
    db.session.commit()
    message = "el chucho se a creado con exito"
    status = 200


    response_body = {
        "msg": message
        
    }

    return jsonify(response_body), status


#endpoint categorias
@api.route('/categorias', methods=['GET'])
def get_categorias():
    
##querys o consultas
    categorias_query = Categorias.query.all()
    
    results = list(map(lambda item: item.serialize(),categorias_query))


    response_body = {
        "msg": "ok",
        "results": results
    }
    return jsonify(response_body), 200


#endpoint resenas
@api.route('/resenas', methods=['GET'])
def get_resenas():
    
##querys o consultas
    resenas_query = Resenas.query.all()
    
    results = list(map(lambda item: item.serialize(),resenas_query))


    response_body = {
        "msg": "ok",
        "results": results
    }
    return jsonify(response_body), 200

@api.route("/validtoken", methods=["GET"])
@jwt_required()
def valid_token():
    # Access the identity of the current user with get_jwt_identity

    current_user = get_jwt_identity()
    
    user = User.query.filter_by(email=current_user).first()
    if user != None:
        
        return jsonify({"isLogged":True}), 200
    else:
        return jsonify({"isLogged":False}), 401
