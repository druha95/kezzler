FROM node:18

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install
RUN npm run build

RUN cd server && npm install

EXPOSE 80
CMD [ "node", "./server/app.js"]
