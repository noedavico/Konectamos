
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
    filename = secure_filename(foto.filename)

    # Guardar la foto en el servidor
    foto.save(os.path.join(app.photos, filename))

    # leer el contenido de la foto
    foto_contenido = foto.read()

    # generar la ruta pública
    url = f'{app.photos}{filename}'

    # obtener el tipo de archivo
    mime_type = magic.from_buffer(foto_contenido, mime=True)

    # actualizar la columna de la base de datos con la nueva ruta
    foto_query = Foto.query.filter_by(
        foto_user_info=user_info_query.id).first()

    if not foto_query:
        foto = Foto(
            nombre=user_query.id,
            foto_imagen=url,
            foto_user_info=user_info_query.id
        )
        db.session.add(foto)
    else:
        foto_query.foto_imagen = url

    db.session.commit()
    print(mime_type)

    print(app.photos, filename)

    # devolver la misma foto como respuesta
    return foto_contenido, 200, {'Content-Type': mime_type}


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

    filename = os.path.basename(foto_query.foto_imagen)
    foto_path = os.path.join(app.photos, filename)

    ruta_relativa = os.path.join(app.photos, filename)
    ruta_absoluta = os.path.abspath(ruta_relativa)

    print(ruta_absoluta)
    print(foto_path)

    with open(ruta_absoluta, 'rb') as f:
        foto_contenido = f.read()
        mime_type = magic.from_buffer(foto_contenido, mime=True)

    print(foto_path)
    print(foto_contenido)
    print(mime_type)

    headers = {'Content-Type': mime_type, 'Access-Control-Allow-Origin': '*'}
    return foto_contenido, 200, headers
