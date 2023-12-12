FROM node:lts
WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE 3000

# RUN npx prisma migrate dev --name init
ENTRYPOINT [ "npm","run" ,"start:migrate:prod" ]