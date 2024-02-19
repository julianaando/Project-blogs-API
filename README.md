# API de Blogs em Node.js 🚀

## Objetivos do Projeto 👨‍💻

Desenvolver uma API e um banco de dados para a produção de conteúdo para um blog!  
Este projeto visa criar uma aplicação em Node.js utilizando ORM para realizar operações CRUD de posts.  

### Principais Funcionalidades 📝

- Implementar endpoints conectados ao banco de dados MySQL, seguindo os princípios do REST.
- Criar um sistema de autenticação através de JWT, exigindo login para fazer posts.
- Estabelecer a relação entre usuários e posts.
- Utilizar categorias para organizar os posts, construindo a relação entre posts e categorias.

### Conhecimentos Aplicados

- Node.js
- Sequelize
- MySQL
- Docker
- JWT (JSON Web Token)

## Como Executar

⚠️ *É necessário ter o Docker instalado para executar o projeto*

1. Clone o repositório
   ```bash
    git clone git@github.com:julianaando/project-blogs-api.git
   ```
2. Entre na pasta raíz do projeto e instale todas as dependências
    ```bash
    cd project-blogs-api
    npm install
    ```
3. Inicialize o Projeto com Docker, utilizando o seguinte comando no diretório raiz
   ```bash
    docker-compose up -d
   ```
4. Prepare o banco de dados executando o seguinte comando para criar o schema, aplicar as migrations e popular com os seeders
   ```bash
    npm run prestart && npm run seed
   ```
5. Inicie o servidor com live-reload para facilitar o desenvolvimento contínuo
   ```bash
    npm run dev
   ```
6. Teste a funcionalidade da API utilizando ferramentas como Thunder Client, Postman, Insomnia ou qualquer preferida. Acesse:

- **URL da API:** `http://localhost:3000`

*Projeto necessário para aprovação no módulo 06 de Back-end - Node.js: ORM e Autenticação da [Trybe](https://www.betrybe.com)*
