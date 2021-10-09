FROM node:14-alpine
ENV NODE_ENV=dev
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --dev --save-dev
COPY . .
RUN chown -R nodemon /usr/src/app
USER nodemon
CMD ["npm", "run","dev"]

