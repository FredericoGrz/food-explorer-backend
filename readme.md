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

3. cd food-explorer-api

```bash
npm install
```

4. Rode o comando a seguir para criar a base de dados e rodar as migrations

```bash
npm run migrate
```

5. Configure as variáveis de ambiente:

Crie um arquivo **.env\_** na raiz do projeto e utilize o arquivo **.env.example** como template.

6. Para rodar o projeto em modo dev, rode o comando

```bash
npm run dev
```

O servidor estará em execução em http://localhost: na porta definida no arquivo .env.
