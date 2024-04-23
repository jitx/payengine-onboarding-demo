FROM node:20.12.2

EXPOSE 3001

WORKDIR /client
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD npm start