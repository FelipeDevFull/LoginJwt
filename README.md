![logo](logo.png)


Sistema de autenticação com Jwt.

## 📋 Funcionalidades do Sistema

- [x] Cadastrar Usuário.
- [x] Autenticar Usuário e Disponibilizar Access token e Refresh token.
- [x] Acesar Rota Protegida com Access Token.
- [x] Gerar um Novo Access Token a partir de um Refresh Token válido.
- [x] Desconectar um Usuário do Sistema a partir de um Refresh Token válido.

## 🔨 Tecnologias Utilizadas

 1. NodeJs
 2. Express
 3. Prisma
 4. Jwt
 5. MongoDb
 6. Docker
 7. Clean Architecture
 8. Swagger
 9. Redocly

## 👨‍💻 Como executar o projeto com Docker.

### Passo a passo
Clone Repositório
```sh
git clone git@github.com:FelipeDevFull/LoginJwt.git
```
Acesse o Diretório
```sh
cd LoginJwt
```
Crie o Arquivo .env
```sh
cp .env.example .env
```
Atualize a variável de ambiente do arquivo ".env" com a string de conexão atlas mongodb.

[Tutorial conexão atlas mongodb](https://youtu.be/anMK76I2dUA?t=892)
```dosini
DATABASE_URL=""
```
Suba os containers do projeto
```sh
docker compose up
```

## 📋 Documentação do Sistema

[LoginJwt - Swagger](http://localhost:3000/v1/user/swagger)

[LoginJwt - Redocly](http://localhost:3000/v1/user/redocly)
