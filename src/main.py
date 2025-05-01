# src/main.py
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, render_template
# Importar blueprints
from src.routes.main import main_bp
from src.routes.modules import modules_bp
from src.routes.resources import resources_bp
from src.routes.complementary import complementary_bp
from src.routes.user import user_bp

app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['SECRET_KEY'] = os.urandom(24) # Chave secreta para sessões, etc.

# Configuração do Banco de Dados (descomentar e configurar se necessário)
# app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{os.getenv('DB_USERNAME', 'root')}:{os.getenv('DB_PASSWORD', 'password')}@{os.getenv('DB_HOST', 'localhost')}:{os.getenv('DB_PORT', '3306')}/{os.getenv('DB_NAME', 'mydb')}"
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# from src.models import db
# db.init_app(app)

# Registrar blueprints
app.register_blueprint(main_bp)
app.register_blueprint(modules_bp)
app.register_blueprint(resources_bp)
app.register_blueprint(complementary_bp)
app.register_blueprint(user_bp, url_prefix='/usuario') # Adicionado prefixo aqui também para consistência

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', title='Página não encontrada'), 404

if __name__ == '__main__':
    # Criar tabelas do banco de dados se necessário (descomentar)
    # with app.app_context():
    #     db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)
