FROM node:16.15.0-slim AS builder
WORKDIR /usr/src/app
COPY /src .
RUN yarn install
RUN yarn build
CMD yarn preview