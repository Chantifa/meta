FROM node:16-alpine3.14
WORKDIR /frontend
COPY ["package.json", "package-lock.json*","./"]
RUN npm install
COPY . .
CMD ["npm", "start"]
