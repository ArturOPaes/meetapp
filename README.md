# Meetapp

Meeatpp é um app agregador de eventos para desenvolvedores chamado Meetapp (um acrônimo à Meetup + App)

## Instalação

Recomendado ter Node.js 8.0.0+ instalado com o [yarn](https://yarnpkg.com/).

### Back-end

```bash
yarn

docker run --name database_meetapp -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=database_meetapp -p 5432:5432 -d postgres

docker run --name mongo_meetapp -p 27017:27017 -d -t mongo

docker run --name redis_meetapp -p 6379:6379 -d -t redis:alpine

yarn migrate

yarn queue

yarn dev
```

### Front-end

```bash
yarn

yarn start
```

### Mobile

```bash
yarn

react-native run-ios
```
