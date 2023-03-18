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

@api.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    # Accede a la identidad del usuario actual con get_jwt_identity

    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    
    return jsonify({"result":user.serialize()}), 200


