FROM node:14.14.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN chown -R node:node .
USER node
RUN npm i
COPY . .
CMD ["npm", "run", "start"]
