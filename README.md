
### **Pré-requisitos**

1. Node.js v18.2 ou superior
2. MySQL
3. Nest CLI

### **Instalação**

1. Clone o repositório do backend:
   ```bash
   git clone https://github.com/M4riotto/book-catalog-api.git
   cd book-catalog-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### **Configuração**


1.  Importe o arquivo `catalogo_livro.sql` para o seu SQL(XAMPP)

2. **Banco de Dados**: Configure o banco de dados MySQL no `app.module.ts` do Nest.js.
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

3. **Variáveis de Ambiente**: Crie um arquivo `.env` com as variáveis necessárias, incluindo a chave secreta para o JWT.

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
  - **Autenticação**: Requer token JWT.
  - **Exemplo de resposta**:
    ```json
    [
      { "id": 1, "titulo": "Livro 1", "autor": "Autor 1", "descricao": "Descrição do livro", "anoPublicacao": 2020, "imageURL": "url_imagem" },
      { "id": 2, "titulo": "Livro 2", "autor": "Autor 2", "descricao": "Descrição do livro", "anoPublicacao": 2021, "imageURL": "url_imagem" }
    ]
    ```

#### **/livros/:id**

- **GET**: Retorna as informações detalhadas de um livro específico com base no ID.
  - **Autenticação**: Requer token JWT.
  - **Parâmetros**: `id` - ID do livro.

- **POST**: Adiciona um novo livro ao catálogo.
  - **Autenticação**: Requer token JWT.
  - **Exemplo de corpo da requisição**:
    ```json
    {
      "titulo": "Novo Livro",
      "autor": "Novo Autor",
      "descricao": "Descrição do livro",
      "anoPublicacao": 2023,
      "imageURL": "url_imagem"
    }
    ```

- **PUT**: Atualiza um livro existente com base no ID.
  - **Autenticação**: Requer token JWT.
  - **Parâmetros**: `id` - ID do livro.
  - **Exemplo de corpo da requisição**:
    ```json
    {
      "titulo": "Livro Atualizado",
      "autor": "Autor Atualizado",
      "descricao": "Nova descrição",
      "anoPublicacao": 2023,
      "imageURL": "nova_url_imagem"
    }
    ```

- **DELETE**: Exclui um livro existente com base no ID.
  - **Autenticação**: Requer token JWT.
  - **Parâmetros**: `id` - ID do livro.

#### **Autenticação JWT**

- **POST /auth/login**: Endpoint para autenticar e obter um token JWT.
  - **Exemplo de corpo da requisição**:
    ```json
    {
      "username": "usuário",
      "password": "senha"
    }
    ```
  - **Exemplo de resposta**:
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
