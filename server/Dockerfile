FROM node:20.12.2

EXPOSE 3000

WORKDIR /server
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD npm run migrate && npm run seed && npm start