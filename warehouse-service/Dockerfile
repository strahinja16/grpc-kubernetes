FROM mhart/alpine-node:12

RUN apk add --update --no-cache \
    python \
    make \
    g++

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm ci

EXPOSE 3001
EXPOSE 50051
CMD [ "npm", "run", "start:dev" ]
