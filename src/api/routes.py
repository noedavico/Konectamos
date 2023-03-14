"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Professional, Categorias
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


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
                    #foto_perfil=request_body["foto_perfil"],
                    #direccion=request_body["direccion"],
                    #ciudad=request_body["ciudad"],
                    #codigo_postal=request_body["codigo_postal"]
                    )
        if request_body["es_profesional"]:
            professional = create_professional(request_body)
            professional.professional_user = user
            user.professional_user = professional
            db.session.add(professional)
            
        # db.session.add(user)
        # db.session.commit()
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