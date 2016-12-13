FROM node:7.2.0

COPY . /usr/src/app/
WORKDIR /usr/src/app

RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]