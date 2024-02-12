
FROM node:18.12.1

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]
