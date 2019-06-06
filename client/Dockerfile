FROM node:11.5-alpine

WORKDIR /client-app

RUN yarn install

COPY . .

LABEL maintainer="Reed Saunders"

CMD ["yarn", "start"]
