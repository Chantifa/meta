FROM node:12.18.1
ENV ENV PATH /src/node_modules/.bin:$PATH

WORKDIR /src

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]
