FROM node:14-alpine

WORKDIR /var/htmlplus

COPY package.json package-lock.json* ./
RUN npm install

COPY lerna.json .
COPY ./packages/docs/package*.json ./packages/docs/
COPY ./packages/examples/package*.json ./packages/examples/
RUN ./node_modules/.bin/lerna bootstrap

COPY . .

RUN npm run clean && ./node_modules/.bin/lerna run build

WORKDIR /var/htmlplus/packages/docs

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
