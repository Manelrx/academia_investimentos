# Academia do Investidor - Projeto Flask

Este é o projeto completo do site educativo "Academia do Investidor", desenvolvido em Flask.

## Funcionalidades Principais

*   **Módulos Educacionais:** Fundamentos e Intermediário/Avançado.
*   **Recursos Interativos:** Calculadora de Juros Compostos, Glossário Financeiro, Mapas Mentais (placeholders), Infográficos (placeholders), Quizzes Interativos, Roadmap Personalizado (requer implementação de backend de usuário).
*   **Conteúdo Complementar:** Recomendações de Livros, Mídia (Vídeos/Podcasts), Cursos e Notícias (placeholder).
*   **Área do Usuário:** Páginas de Login, Cadastro, Perfil (com badges de gamificação) e Conteúdos Salvos (requer implementação de backend).
*   **Interface:** Design responsivo básico.

## Estrutura do Projeto

```
investidor_academia/
├── src/
│   ├── models/       # Modelos de banco de dados (se habilitado)
│   ├── routes/       # Blueprints (main, modules, resources, complementary, user)
│   ├── static/
│   │   ├── css/      # Arquivos CSS (style.css, calculadora.css, etc.)
│   │   ├── js/       # Arquivos JavaScript (calculadora.js, glossario.js, quizzes.js)
│   │   └── img/      # Imagens (placeholders para badges, capas, etc.)
│   ├── templates/    # Arquivos HTML (organizados por seção)
│   │   ├── layouts/  # Template base (base.html)
│   │   ├── modules/  # Templates dos módulos educativos
│   │   ├── resources/# Templates dos recursos didáticos
│   │   ├── complementary/ # Templates do conteúdo complementar
│   │   └── user/     # Templates da área do usuário
│   ├── utils/        # Funções utilitárias (se necessário)
│   └── main.py     # Ponto de entrada da aplicação Flask
├── venv/             # Ambiente virtual Python
├── requirements.txt  # Dependências do Python
├── todo.md           # Lista de tarefas do desenvolvimento
└── README.md         # Este arquivo
```

## Como Executar Localmente

1.  **Pré-requisitos:**
    *   Python 3.11 ou superior instalado.
    *   `pip` (gerenciador de pacotes Python).

2.  **Descompacte o Projeto:**
    *   Extraia o conteúdo do arquivo `investidor_academia.zip` para um diretório de sua escolha.

3.  **Navegue até o Diretório:**
    *   Abra um terminal ou prompt de comando e navegue até o diretório raiz do projeto (`investidor_academia`).
    ```bash
    cd caminho/para/investidor_academia
    ```

4.  **Crie e Ative um Ambiente Virtual (Recomendado):**
    *   **Linux/macOS:**
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```
    *   **Windows:**
        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```

5.  **Instale as Dependências:**
    ```bash
    pip install -r requirements.txt
    ```

6.  **Execute a Aplicação Flask:**
    ```bash
    python src/main.py
    ```

7.  **Acesse no Navegador:**
    *   Abra seu navegador e acesse o endereço `http://127.0.0.1:5000` ou `http://localhost:5000`.

## Observações

*   **Banco de Dados:** A funcionalidade de banco de dados (para usuários, progresso, etc.) está comentada no `src/main.py`. Para habilitá-la, você precisará de um servidor MySQL rodando, descomentar as linhas relevantes em `src/main.py`, configurar as credenciais do banco (preferencialmente via variáveis de ambiente) e possivelmente criar os modelos em `src/models/` e executar `db.create_all()`.
*   **Placeholders:** Muitas imagens (mapas mentais, infográficos, capas de livros, badges) são placeholders e precisam ser substituídas pelas imagens reais.
*   **Notícias:** A seção de notícias é estática e precisaria ser integrada a uma API ou feed RSS para atualização dinâmica.
*   **Funcionalidades de Usuário:** Login, cadastro, salvamento de conteúdo e progresso no roadmap requerem implementação completa do backend (interação com banco de dados, gerenciamento de sessão/autenticação).
*   **Testes:** Devido a limitações na ferramenta de teste, a validação visual e interativa completa não pôde ser garantida durante o desenvolvimento. Testes manuais adicionais são recomendados.


