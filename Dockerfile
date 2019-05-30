FROM node:8
WORKDIR /home/niveus/
COPY package.json /home/niveus/
RUN npm install && npm install express && npm install path
COPY . /home/niveus/
CMD node server.js
EXPOSE 8080

