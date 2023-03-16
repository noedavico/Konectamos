from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)
    es_profesional = db.Column(db.Boolean(), unique=False)
    is_active = db.Column(db.Boolean(), default=True,
                          unique=False, nullable=False)

    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        result = {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            

        }