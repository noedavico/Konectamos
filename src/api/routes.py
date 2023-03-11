"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Professional, Categorias
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/user', methods=['POST', 'GET'])
def create_user():
    request_body = request.json
    print(request_body)
    

    user_query = User.query.filter_by(email=request_body["email"]).first()

    if user_query is None:
        user = User(email=request_body["email"],
                    password=request_body["password"],
                    nombre=request_body["nombre"],
                    apellido=request_body["apellido"],
                    direccion=request_body["direccion"],
                    ciudad=request_body["ciudad"],
                    codigo_postal=request_body["codigo_postal"])
        # db.session.add(user)
        # db.session.commit()
        print("el usuario se a creado",user)
        
    else: 
        print("ya existe el usuario")

    response_body = {
            "msg": "el usuario se a creado con exito",
            #"result": user_query.serialize()
        }

    return jsonify(response_body), 200



#añadir datos en caso de ser profecional
def create_professional(request_body):
    print(request_body)
    

    user_query = User.query.filter_by(email=request_body["email"]).first()

    if user_query is None:
        user = User(email=request_body["email"], password=request_body["password"], nombre=request_body["nombre"], apellido=request_body["apellido"], direccion=request_body["direccion"], ciudad=request_body["ciudad"], codigo_postal=request_body["codigo_postal"])
        # db.session.add(user)
        # db.session.commit()
        print("el usuario se a creado",user)
        
    else: 
        print("ya existe el usuario")

    response_body = {
            "msg": "el usuario se a creado con exito",
            #"result": user_query.serialize()
        }

    return jsonify(response_body), 200