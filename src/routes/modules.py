# src/routes/modules.py
from flask import Blueprint, render_template

modules_bp = Blueprint("modules", __name__, url_prefix="/modulos")

# --- Rotas do Módulo de Fundamentos ---
@modules_bp.route("/fundamentos")
def fundamentos():
    return render_template("modules/fundamentos/index.html", title="Fundamentos do Investimento")

@modules_bp.route("/fundamentos/o-que-sao-investimentos")
def fundamentos_o_que_sao():
    return render_template("modules/fundamentos/o_que_sao_investimentos.html", title="O Que São Investimentos?")

@modules_bp.route("/fundamentos/educacao-financeira")
def fundamentos_educacao_financeira():
    return render_template("modules/fundamentos/educacao_financeira.html", title="Educação Financeira Básica")

@modules_bp.route("/fundamentos/conceitos-chave")
def fundamentos_conceitos_chave():
    return render_template("modules/fundamentos/conceitos_chave.html", title="Conceitos-Chave do Mercado")

# --- Rotas do Módulo Intermediário/Avançado ---
@modules_bp.route("/intermediario-avancado")
def intermediario_avancado():
    # Página inicial do módulo intermediário/avançado
    return render_template("modules/intermediario_avancado/index.html", title="Investimentos Intermediários e Avançados")

# Adicionar mais rotas para páginas específicas dentro dos módulos conforme necessário
