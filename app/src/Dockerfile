FROM node:latest

ENV PATH /node_modules/.bin:$PATH

WORKDIR /src

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000