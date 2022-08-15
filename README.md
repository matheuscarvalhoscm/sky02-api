<img src="../sky02-ui/src/assets/sk-logo-transparent-white.png" alt="Logo SKY02" align="right" width="150px">

# SKY02 - Your Address Assistant

## 🖥 Sobre o projeto

A aplicação consiste em uma API para inserção, busca, atualização e exclusão de informações de endereços cadastros em um arquivo JSON.

---

## 🚀 Executando a aplicação

## **Pré Requisitos**

Para executar a aplicaçãoo é importante que você tenha instalado as seguintes ferramentas em sua máquina:

* [Node.js](https://nodejs.org/en/)

### **🎲️ Rodando o servidor**

~~~
# clone o repositório
git clone https://github.com/matheuscarvalhoscm/sky02-api.git

# acesse a pasta do servidor
cd sky02-api

# instale as dependências
npm install

# subindo o servidor
npm run dev

# O servidor inciará na porta:3001 - acesse http://localhost:3001
~~~

---
## 🌐 Endpoints 

### GET `/`

Retorna a lista com todos os endereços cadastros no app:


```json
[
  {
    "cep": "01311200",
    "street": "Avenida Paulista",
    "district": "Bela Vista",
    "city": "São Paulo",
    "state": "SP"
  }
]
```

### POST `/`
Insere um novo endereço no app. O corpo da requisição deve conter os seguintes parâmetros:

```json
{
  "cep": "string",
  "street": "string",
  "district": "string",
  "city": "string",
  "state": "string"
}

```

### PUT `/:cep`
Atualiza um endereço no app. A requisição deve ter como parâmetro o CEP do endereço que será atualizado e o seu corpo deve conter os seguintes parâmetros:

```json
{
  "cep": "string",
  "street": "string",
  "district": "string",
  "city": "string",
  "state": "string"
}
```
### DELETE `/:cep`

Deleta um enderço cadastrado no app. A requisição deve conter como parâmetro o CEP que será deletado. Caso haja mais de um endereço com o mesmo CEP, apenas a primeira ocorrência será excluída.

---
## 🛠️ Tecnologias
As seguintes tecnologias foram utilizadas na construção desse projeto:

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white&color=5e685e)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%white&color=5e685e)](https://expressjs.com/pt-br/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white&color=5e685e)](https://www.typescriptlang.org/)

---

## 📚 Referências

- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Stack Overflow](https://stackoverflow.com/)

---

## 📧 Contato
[![](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=5e685e)](https://www.linkedin.com/in/matheuscarvalhoscm/)
[![](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&color=5e685e)](mailtto:matheuscarvalhoscm@gmail.com)
