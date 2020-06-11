FROM node:10.16-alpine

RUN apk add --update --no-cache \
    python \
    make \
    g++

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm ci

EXPOSE 3000
EXPOSE 50051
CMD [ "npm", "run", "start:dev" ]
