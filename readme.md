# Food Explorer API

Bem-vindo ao Food Explorer API! Este projeto é uma API RESTful para um sistema de exploração de alimentos, que permite aos usuários comuns buscar e pedir diversos alimentos, enquanto permite usuários admins, a criar categorias e novos pratos.

## Visão Geral

O Food Explorer API fornece endpoints para:

- Listar pratos disponíveis
- Obter detalhes sobre um prato específico
- Adicionar novos pratos ao sistema
- Fazer upload da imagem do prato
- Atualizar informações de pratos existentes
- Favoritar um prato
- Criar um pedido
- Efetuar pagamento via PIX ou cartão de credito
- Criar Usuario

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- npm (Node Package Manager)

## Bibliotecas utilizadas

- nodemon
- bcryptjs
- cors
- dotenv
- express
- express-async-errors
- jsonwebtoken
- knex
- multer
- pm2
- sqlite3

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/FredericoGrz/food-explorer-backend.git
```

2. Navegue até o diretório do projeto:

```bash
cd food-explorer-backend
```

3. Instale as dependências do projeto

```bash
npm install
```

4. Rode o comando a seguir para criar a base de dados e rodar as migrations

```bash
npm run migrate
```

5. Configure as variáveis de ambiente:

Crie um arquivo **.env** na raiz do projeto e utilize o arquivo **.env.example** como template.

6. Para rodar o projeto em modo dev, rode o comando

```bash
npm run dev
```

O servidor estará em execução em http://localhost:$PORT na porta definida no arquivo .env.

## Rotas disponíveis

### Users

- **Criação de Novo Usuário**

  - Método: POST
  - URL: http://localhost:$PORT/users/
  - Descrição: Endpoint para criar um novo usuário.

### Sessions

- **Login do Usuario**

- Método: POST
  - URL: http://localhost:$PORT/sessions/
  - Descrição: Endpoint para efetuar o login do Usuario.

### Categories

- **Listagem de categorias**

  - Método: GET
  - URL: http://localhost:$PORT/categories/
  - Descrição: Endpoint para obter a lista de todas as categorias.

- **Detalhes de categoria**

  - Método: GET
  - URL: http://localhost:$PORT/categories/:id
  - Descrição: Endpoint para obter detalhes de uma categoria específica.

- **Criação de uma nova categoria**

  - Método: POST
  - URL: http://localhost:$PORT/categories/
  - Descrição: Endpoint para criar uma nova categoria.

- **Alteração de uma categoria**

- Método: PUT
  - URL: http://localhost:$PORT/categories/:id
  - Descrição: Endpoint para alteração de uma categoria criada.

**Remoção de categoria**

- Método: DELETE
- URL: http://localhost:$PORT/categories/:id
- Descrição: Endpoint para excluir uma categoria.

### Pratos

- **Listagem de pratos**

  - Método: GET
  - URL: http://localhost:$PORT/pratos/
  - Descrição: Endpoint para obter a lista de todos os pratos.

- **Detalhes de um prato especifico**

  - Método: GET
  - URL: http://localhost:$PORT/pratos/:id
  - Descrição: Endpoint para obter detalhes de um prato específico.

- **Criação de uma nova prato**

  - Método: POST
  - URL: http://localhost:$PORT/pratos/
  - Descrição: Endpoint para criar um novo prato.

- **Alteração de uma prato**

- Método: PUT
  - URL: http://localhost:$PORT/pratos/:id
  - Descrição: Endpoint para alteração de um prato criado.

**Remoção de um prato**

- Método: DELETE
- URL: http://localhost:$PORT/pratos/:id
- Descrição: Endpoint para excluir um prato especifico.

### Upload

- **Upload de imagem**

  - Método: POST
  - URL: http://localhost:$PORT/upload/
  - Descrição: Endpoint para fazer upload de uma imagem.

### Favoritos

- **Listagem de pratos favoritados**

  - Método: GET
  - URL: http://localhost:$PORT/favorites/
  - Descrição: Endpoint para obter a lista de todos os pratos favoritados para o Usuario logado.

- **Favoritar/Desfavoritar um prato**

  - Método: POST
  - URL: http://localhost:$PORT/favorites/
  - Descrição: Endpoint para adicionar/remover um prato dos favoritos.

### Pedidos

- **Listagem de pedidos**

  - Método: GET
  - URL: http://localhost:$PORT/pedidos/
  - Descrição: Endpoint para obter a lista de pedidos do usuário logado.

- **Listagem dos pratos que pertencem ao pedido**

  - Método: GET
  - URL: http://localhost:$PORT/pedidos/:id
  - Descrição: Endpoint para obter a lista de pratos de um pedido especifico.

- **Criação de um novo pedido**

  - Método: POST
  - URL: http://localhost:$PORT/pedidos/
  - Descrição: Endpoint para criar um novo pedido.

### PedidoPratos

- **Adição de um prato ao pedido**

  - Método: POST
  - URL: http://localhost:$PORT/pedidopratos/
  - Descrição: Endpoint para adicionar um prato ao pedido do usuário logado.

- **Exclusão de um prato do pedido**

  - Método: PUT
  - URL: http://localhost:$PORT/pedidopratos/
  - Descrição: Endpoint para remover um prato de um pedido.

### Pagamento

- **Finalizar um pagamento**

  - Método: GET
  - URL: http://localhost:$PORT/pagamentos/
  - Descrição: Endpoint para finalizar um pagamento especifico.

- **Criação de um pagamento**

  - Método: POST
  - URL: http://localhost:$PORT/pagamentos/
  - Descrição: Endpoint para criar um novo pagamento.

### Pagamento

- **Finalizar um pagamento**

  - Método: GET
  - URL: http://localhost:$PORT/pagamentos/
  - Descrição: Endpoint para finalizar um pagamento especifico.

### Download de imagem

- **Download de imagem**

  - Método: GET
  - URL: http://localhost:$PORT/files/$fileName
  - Descrição: Endpoint para baixar uma imagem.
