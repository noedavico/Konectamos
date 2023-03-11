"""empty message

Revision ID: 7b532316235a
Revises: 
Create Date: 2023-03-11 18:01:35.036031

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7b532316235a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categorias',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('descripcion', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('professional',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('descripcion', sa.String(length=120), nullable=False),
    sa.Column('experiencia', sa.String(length=120), nullable=False),
    sa.Column('precio_hora', sa.String(length=120), nullable=False),
    sa.Column('puntuacion', sa.String(length=120), nullable=False),
    sa.Column('cantidad_votos', sa.Integer(), nullable=False),
    sa.Column('foto_perfil', sa.String(length=120), nullable=False),
    sa.Column('redes_sociales', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('apellido', sa.String(length=120), nullable=False),
    sa.Column('direccion', sa.String(length=120), nullable=False),
    sa.Column('ciudad', sa.String(length=120), nullable=False),
    sa.Column('codigo_postal', sa.Integer(), nullable=False),
    sa.Column('telefono', sa.String(length=120), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('es_profesional', sa.Boolean(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('professional')
    op.drop_table('categorias')
    # ### end Alembic commands ###
