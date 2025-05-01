# src/routes/resources.py
from flask import Blueprint, render_template

resources_bp = Blueprint("resources", __name__, url_prefix="/recursos")

@resources_bp.route("/calculadora")
def calculadora():
    return render_template("resources/calculadora/index.html", title="Calculadora de Investimentos")

@resources_bp.route("/mapas-mentais")
def mapas_mentais():
    return render_template("resources/mapas_mentais/index.html", title="Mapas Mentais")

@resources_bp.route("/infograficos")
def infograficos():
    return render_template("resources/infograficos/index.html", title="Infográficos")

@resources_bp.route("/simulados-quizzes")
def simulados_quizzes():
    return render_template("resources/simulados_quizzes/index.html", title="Simulados e Quizzes")

@resources_bp.route("/roadmap")
def roadmap():
    # Lógica para roadmap personalizado
    return render_template("resources/roadmap/index.html", title="Roadmap Personalizado")

@resources_bp.route("/glossario")
def glossario():
    return render_template("resources/glossario/index.html", title="Glossário Financeiro")
