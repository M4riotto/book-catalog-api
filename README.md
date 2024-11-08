
### **Pré-requisitos**

1. Node.js v18.2 ou superior
2. MySQL
3. Nest CLI

### **Instalação**

1. Clone o repositório do backend:
   ```bash
   git clone <URL_DO_REPOSITORIO_BACKEND>
   cd book-catalog-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### **Configuração**

1. **Banco de Dados**: Configure o banco de dados MySQL no `app.module.ts` do Nest.js. Exemplo de configuração para conexão com o MySQL:
   Pegue o arquivo catalogo_livro.sql e importa para o seu SQL
   ```typescript
   TypeOrmModule.forRoot({
     type: 'mysql',
     host: 'localhost',
     port: 3306,
     username: 'root',
     password: 'password',
     database: 'book_catalog',
     entities: [Livro],
     synchronize: true,
   }),
   ```

2. **Variáveis de Ambiente**: Crie um arquivo `.env` com as variáveis necessárias, incluindo a chave secreta para o JWT.

### **Scripts**

- **Desenvolvimento**: Para iniciar o servidor de desenvolvimento:
   ```bash
   npm run start:dev
   ```

- **Compilar**: Para compilar o projeto:
   ```bash
   npm run build
   ```

### **Endpoints da API**

#### **/livros**

- **GET**: Retorna todos os livros do catálogo.
  - Exemplo de resposta:
    ```json
    [
      { "id": 1, "titulo": "Livro 1", "autor": "Autor 1", "descricao": "Descrição do livro", "anoPublicacao": 2020, "imageURL": "url_imagem" },
      { "id": 2, "titulo": "Livro 2", "autor": "Autor 2", "descricao": "Descrição do livro", "anoPublicacao": 2021, "imageURL": "url_imagem" }
    ]
    ```

#### **/livros/:id**

- **GET**: Retorna as informações detalhadas de um livro específico.

- **POST**: Adiciona um novo livro. Requer autenticação com JWT.
  - Exemplo de corpo da requisição:
    ```json
    {
      "titulo": "Novo Livro",
      "autor": "Novo Autor",
      "descricao": "Descrição do livro",
      "anoPublicacao": 2023,
      "imageURL": "url_imagem"
    }
    ```

- **PUT**: Atualiza um livro existente. Requer autenticação com JWT.
  - Exemplo de corpo da requisição:
    ```json
    {
      "titulo": "Livro Atualizado",
      "autor": "Autor Atualizado",
      "descricao": "Nova descrição",
      "anoPublicacao": 2023,
      "imageURL": "nova_url_imagem"
    }
    ```

- **DELETE**: Exclui um livro existente. Requer autenticação com JWT.

#### **Autenticação JWT**

- **POST /auth/login**: Endpoint para autenticar e obter um token JWT.

  - Exemplo de corpo da requisição:
    ```json
    {
      "username": "usuário",
      "password": "senha"
    }
    ```

  - Exemplo de resposta:
    ```json
    {
      "access_token": "jwt_token_aqui"
    }
    ```

### **Segurança e Autenticação**

- **JWT**: Todos os endpoints relacionados a livros são protegidos com JWT. O token deve ser enviado no cabeçalho de autorização:
  ```bash
  Authorization: Bearer <token>
  ```

