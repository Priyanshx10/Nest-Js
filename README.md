<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Nest-Js
Learning Nest Js using FreeCodeCamp and Nest Js Documentation

#Setup
1. Install Node Js
2. Install Nest Js
3. Install Nest CLI
npm i -g @nestjs/cli
$ nest new project-name

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


Here are several ways to check if Docker is installed and running on your system:

1. Using the docker ps command:

This is the most common way to check if Docker is running and list any containers that are currently running, stopped, or exited.

Bash
"docker ps"

If Docker is not running, you'll see an error message like "Cannot connect to the Docker daemon. Is the docker daemon running?"
If Docker is running but there are no containers, the output will be empty.
If containers are running, you'll see information about them, including container ID, image name, status, ports, and names (if assigned).
2. Using the docker info command:

This command provides more detailed information about the Docker daemon, including its configuration, system resources, connected networks, and more.

Bash
"docker info"

This output can be helpful for troubleshooting any issues you might be facing with Docker.

Prefer to use Docker compose will automatically allow me span the docker container and destroy them.So its very handy.
the docker configuration is in docker-compose.yml

to launch our database we go to terminal and run "docker compose up dev-db -d"
to stop our database we go to terminal and run "docker compose down dev-db "

For Prisma SetUp
"npm add -D prisma"
"npm add -D @prisma/client"
"npx prisma init"

THE TECH STACK
Here's a breakdown of each tools and technology :

Prisma : Acts like a bridge between your application and your database. It lets you write simple queries (like fetching or updating data) without needing raw SQL.

Docker : Packages your application and its dependencies into self-contained units called containers. These containers run consistently across different environments.

Postman: A tool for testing APIs (like web services). You can send requests (like GET or POST) and see the responses, making it easy to interact with and debug APIs.

NestJS: A framework for building server-side applications in JavaScript (using TypeScript). NestJS provides structure and tools for building well-organized applications.

TypeScript : An extension of JavaScript that adds optional static typing. This helps catch errors early in development, making your code more reliable and easier to maintain.