FROM node:alpine

WORKDIR /src/

ENV PATH /node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000