FROM node:alpine

WORKDIR /usr/app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 3000 9229

CMD ["yarn", "dev"]
