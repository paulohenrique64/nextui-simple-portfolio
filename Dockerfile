FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . /app

RUN npm install && npm run build

CMD [ "npm", "run", "dev", "--", "--host" ]