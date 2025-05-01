# src/routes/user.py
from flask import Blueprint, render_template # Adicionar outras importações necessárias (ex: login_required, current_user)

user_bp = Blueprint("user", __name__, url_prefix="/usuario")

@user_bp.route("/perfil")
# @login_required # Descomentar quando a autenticação estiver implementada
def perfil():
    # Lógica para exibir o perfil do usuário, progresso, badges, etc.
    return render_template("user/perfil.html", title="Meu Perfil")

@user_bp.route("/login")
def login():
    # Lógica de login
    return render_template("user/login.html", title="Login")

@user_bp.route("/cadastro")
def cadastro():
    # Lógica de cadastro
    return render_template("user/cadastro.html", title="Cadastro")

@user_bp.route("/logout")
# @login_required
def logout():
    # Lógica de logout
    # Redirecionar para a página inicial ou de login
    pass

@user_bp.route("/salvos")
# @login_required
def salvos():
    # Lógica para exibir conteúdos salvos pelo usuário
    return render_template("user/salvos.html", title="Conteúdos Salvos")
