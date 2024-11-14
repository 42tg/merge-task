FROM node:23-alpine AS base

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock  /app/yarn.lock
COPY tsconfig.json /app/tsconfig.json
COPY babel.config.js /app/babel.config.js

RUN yarn install --frozen-lockfile

COPY src /app/src

FROM base AS test
ENTRYPOINT ["yarn", "test", "--coverage"]

FROM base AS build
RUN yarn build
COPY bin /app/bin

ENTRYPOINT [ "node", "./bin/merge.js" ]