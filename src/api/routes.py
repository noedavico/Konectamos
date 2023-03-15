"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)


@api.route('/user', methods=['POST'])
def create_user():
    request_body = request.json
    
    user_query = User.query.filter_by(email=request_body["email"]).first()

    if user_query is None:
        user = User(email=request_body["email"],
                    password=request_body["password"],
                    nombre=request_body["nombre"],
                    apellido=request_body["apellido"],
                    
                    )
        
            
        db.session.add(user)
        db.session.commit()
        print("el usuario se a creado", user)

    else:
        print("ya existe el usuario")

    response_body = {
        "msg": "el usuario se a creado con exito",
        # "result": user_query.serialize()
    }

    return jsonify(response_body), 200




    return jsonify(response_body), 200

# obtiene los datos de todos los usuarios
@api.route('/user', methods=['GET'])
def handle_hello():
    
    #querys o consultas
    users_query = User.query.all()
    results = list(map(lambda item: item.serialize(),users_query))

    response_body = {
        "msg": "ok",
        "results": results
    }

    return jsonify(response_body), 200



# Cree una ruta para autenticar a sus usuarios y devolver JWT. El
# La función create_access_token() se usa para generar realmente el JWT..
@api.route("/user", methods=["GET"])
@jwt_required()
def get_user():
    # Accede a la identidad del usuario actual con get_jwt_identity

    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    
    return jsonify({"result":user.envio_basico()}), 200


    
@api.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    # Accede a la identidad del usuario actual con get_jwt_identity

    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    print(user)
    return jsonify({"result":user.serialize()}), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
# hacemos una consulta a la tabla para saber si el user existe
    user = User.query.filter_by(email=email).first()
#si no existe devuelvo msg
    if user is None:
        return jsonify({"msg": "User dosn´t exist"}),
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


