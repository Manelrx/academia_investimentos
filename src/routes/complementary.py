# src/routes/complementary.py
from flask import Blueprint, render_template

complementary_bp = Blueprint("complementary", __name__, url_prefix="/complementar")

@complementary_bp.route("/livros")
def livros():
    return render_template("complementary/livros/index.html", title="Recomendações de Livros")

@complementary_bp.route("/midia")
def midia():
    return render_template("complementary/midia/index.html", title="Vídeos, Podcasts e Canais")

@complementary_bp.route("/cursos")
def cursos():
    return render_template("complementary/cursos/index.html", title="Cursos Gratuitos e Pagos")

@complementary_bp.route("/noticias")
def noticias():
    # Lógica para buscar notícias atualizadas
    return render_template("complementary/noticias/index.html", title="Notícias do Mercado")
