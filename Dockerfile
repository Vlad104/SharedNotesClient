FROM node:14-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./

EXPOSE 3000

CMD npm run start
