"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Professional, Categorias
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)


@api.route('/user', methods=['POST'])
def create_user():
    request_body = request.json
    print(request_body)

    user_query = User.query.filter_by(email=request_body["email"]).first()

    if user_query is None:
        user = User(email=request_body["email"],
                    password=request_body["password"],
                    nombre=request_body["nombre"],
                    apellido=request_body["apellido"],
                    
                    )
        # if request_body["es_profesional"]:
        #     professional = create_professional(request_body)
        #     professional.professional_user = user
        #     user.professional_user = professional
        #     db.session.add(professional)
            
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


# añadir datos en caso de ser profecional
def create_professional(request_body):
    print(request_body)

    return Professional(descripcion=request_body["descripcion"],
                        experiencia=request_body["experiencia"],
                        precio_hora=request_body["precio_hora"],
                        puntuacion=request_body["puntuacion"],
                        cantidad_votos=request_body["cantidad_votos"],
                        
                        redes_sociales=request_body["redes_sociales"],
                        categoria_id=Categorias.query.filter_by(id=request_body["categoria_id"]).first())
    # db.session.add(user)
    # db.session.commit()
    print("el professional se a creado", professional)

    # else:
    #     print("ya existe el professional")

    response_body = {
        "msg": "el professional se a creado con exito",
        # "result": user_query.serialize()
    }

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

# obtiene los datos de un usuario
# @api.route('/user/<int:user_id>', methods=['GET'])
# def get_info_user(user_id):
#     user_query = User.query.filter_by(id=user_id).first()
# ##querys o consultas
#     response_body = {
#         "msg": "ok",
#         "result": user_query.serialize()
#     }

#     return jsonify(response_body), 200

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


