# NestJS Repository for EcosCooting Backend

## Installation

To install the dependencies, run:
```bash
npm i
```


## Usage

To start the server in development mode, run:

```bash
npm start
```

To start the server in watch mode, run:

```bash
npm run start:dev
```

## Configuration

The MySQL credentials are specified in `app.module.ts`. By default, the backend is trying to connect to a MySQL instance running locally.

To persist data when restarting the backend, set `isProduction` to `true` in `app.module.ts`.

## Docker

To set up a Docker container with a MySQL database, make sure Docker is installed and run:

```bash
$ docker-compose up
```


This will start a MySQL instance in a Docker container. The backend will automatically connect to this instance.
