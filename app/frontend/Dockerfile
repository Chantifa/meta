FROM node:alpine
WORKDIR /frontend
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install - g --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
