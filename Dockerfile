FROM node:16.5.0-slim AS builder
WORKDIR /usr/src/app
COPY /src .
RUN yarn 
RUN yarn build
CMD yarn preview