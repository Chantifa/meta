FROM node:14-alpine
ENV NODE_ENV=dev
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --dev --save-dev
COPY . .
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run","dev"]

