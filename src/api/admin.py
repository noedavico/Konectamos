
import os
from flask_admin import Admin
from .models import db, User, User_info, Foto, Direccion, Categorias, Peques, Mayores, Mascota, Resenas, Valoracion
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(User_info, db.session))
    admin.add_view(ModelView(Foto, db.session))
    admin.add_view(ModelView(Direccion, db.session))
    admin.add_view(ModelView(Categorias, db.session))
    admin.add_view(ModelView(Peques, db.session))
    admin.add_view(ModelView(Mayores, db.session))
    admin.add_view(ModelView(Mascota, db.session))
    admin.add_view(ModelView(Resenas, db.session))
    admin.add_view(ModelView(Valoracion, db.session))
    

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))