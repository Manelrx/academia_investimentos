# Instruções para Publicação no GitHub Pages

Parabéns! Os arquivos estáticos do seu site "Academia do Investidor" foram gerados com sucesso e estão prontos para serem publicados gratuitamente usando o GitHub Pages.

Siga estes passos:

## 1. Pré-requisitos

*   **Conta no GitHub:** Você precisa ter uma conta no GitHub.
*   **Repositório GitHub:** Crie um novo repositório no GitHub para hospedar seu site. Você pode escolher um nome como `investidor-academia` ou similar.
    *   **Importante:** Se você quiser que o site seja acessível em `seudousuario.github.io`, o nome do repositório *deve* ser `seudousuario.github.io` (substitua `seudousuario` pelo seu nome de usuário no GitHub).
    *   Se você usar outro nome (ex: `investidor-academia`), o site ficará em `seudousuario.github.io/investidor-academia`.

## 2. Extraia os Arquivos

*   Baixe e descompacte o arquivo `.zip` que acompanha esta mensagem.
*   Dentro da pasta descompactada (`investidor_academia_estatico`), você encontrará uma subpasta chamada `out`. **É o conteúdo desta pasta `out` que será publicado.**

## 3. Faça o Upload dos Arquivos para o GitHub

Existem duas maneiras principais:

**Método A: Upload via Interface Web (Mais Simples)**

1.  Navegue até o repositório que você criou no GitHub.
2.  Clique em "Add file" e depois em "Upload files".
3.  **Arraste e solte todo o conteúdo da pasta `out`** (não a pasta `out` em si, mas todos os arquivos e pastas dentro dela) para a área de upload do GitHub.
4.  Após o upload, adicione uma mensagem de commit (ex: "Deploy inicial do site") e clique em "Commit changes".

**Método B: Usando Git (Recomendado para futuras atualizações)**

1.  Instale o Git em seu computador, se ainda não o tiver.
2.  Clone o repositório do GitHub para o seu computador:
    ```bash
    git clone https://github.com/seudousuario/seu-repositorio.git
    cd seu-repositorio
    ```
3.  Copie **todo o conteúdo da pasta `out`** para dentro da pasta do repositório clonado.
4.  Adicione, faça o commit e envie os arquivos para o GitHub:
    ```bash
    git add .
    git commit -m "Deploy inicial do site"
    git push origin main # ou a branch principal do seu repositório
    ```

## 4. Ative o GitHub Pages

1.  No seu repositório no GitHub, vá para "Settings" (Configurações).
2.  Na barra lateral esquerda, clique em "Pages".
3.  Na seção "Build and deployment", em "Source", selecione "Deploy from a branch".
4.  Em "Branch", selecione a branch para a qual você enviou os arquivos (geralmente `main` ou `master`) e a pasta `/root`.
5.  Clique em "Save".
6.  Aguarde alguns minutos. O GitHub irá construir e publicar seu site. O endereço do site publicado será exibido nesta mesma página de configurações (geralmente `https://seudousuario.github.io/seu-repositorio/` ou `https://seudousuario.github.io/` se o nome do repositório for `seudousuario.github.io`).

## 5. Observações Importantes

*   **Linting:** O processo de build ignorou alguns erros de formatação de código (linting) para permitir a conclusão. Se desejar, você pode revisar o código-fonte (também incluído no zip) e corrigir esses detalhes usando `pnpm run lint`.
*   **BasePath (Se necessário):** Se você publicou em um repositório que *não* se chama `seudousuario.github.io` (ou seja, o site ficará em um subdiretório como `/investidor-academia`), talvez seja necessário configurar o `basePath` no arquivo `next.config.mjs` (descomente e ajuste a linha `// basePath: "/your-repo-name",`), executar `pnpm build` novamente no código-fonte e reenviar o conteúdo da pasta `out` atualizada.
*   **Atualizações:** Para atualizar o site, basta gerar um novo build (`pnpm build` no código-fonte) e reenviar o conteúdo da pasta `out` para o GitHub usando um dos métodos do passo 3.

Pronto! Seu site educativo estará online e acessível para todos.

