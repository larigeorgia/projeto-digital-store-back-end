# Projeto Digital Store Back-end

Este é o repositório para o projeto de uma API RESTFUL para Loja online Digital Store. Neste projeto foram utilizadas tecnologias como Node, Express, Sequelize e várias outras tecnologias.

## **Índice**
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Conexão com o banco](#conexão-com-o-banco)
- [Criando tabelas](#criando-tabelas)
- [Rodando o Projeto](#rodando-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## **Pré-requisitos**

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MySQL workbench](https://www.mysql.com/products/workbench/)

## **Instalação**

Siga os passos abaixo para clonar o repositório e instalar as dependências do projeto:

1. **Clone o repositório:**

   Abra o terminal e execute o seguinte comando:

   ```bash
   git clone https://github.com/larigeorgia/projeto-digital-store-back-end
   ```

   Navegue até o diretório do projeto:

   ```bash
   cd projeto-digital-store-back-end
   ```

2. **Instale as dependências:**

   Com o terminal aberto no diretório do projeto, execute o comando abaixo para instalar todas as dependências necessárias:

   ```bash
   npm install
   ```

## **Conexão com o banco**

Crie uma pasta config e em seguida um arquivo database.js, de acordo com database.example.js preencha os campos de acordo com conexão do seu MySQL workbench.

Teste a conexão com o comando:

```bash
node src/config/database.js
```

Ou se já estiver na pasta config: 

```bash
node database.js
```

Se não receber nenhum erro, está tudo certo. 

## **Criando tabelas**

Na pasta DB execute o arquivo syncDB.js com o comando:

```bash
node src/DB/syncDB.js
```

Ou se já estiver na pasta DB: 

```bash
node syncDB.js
```

## **Rodando o Projeto**

Após a instalação das dependências e conexão com o banco, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

```bash
npm start
```

Você poderá acessar a aplicação em seu navegador no seguinte endereço:

```
http://localhost:3000/
```
A porta poderá ser alterada de acordo com o arquivo .env.example


## **Tecnologias Utilizadas**
- **Node**
- **Express**
- **Bcrypt**
- **Dotenv**
- **JWT**
- **MySQL**
- **Nodemon**
- **Sequelize**