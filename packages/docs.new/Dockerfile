FROM node:16-alpine

WORKDIR /var/htmlplus

COPY . .
RUN npm install

WORKDIR /var/htmlplus/packages/docs
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]