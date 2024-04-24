FROM node:20.12.2

EXPOSE 3001

WORKDIR /client
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY /public ./public
COPY /src ./src
CMD npm start