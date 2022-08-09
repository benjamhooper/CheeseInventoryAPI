FROM node:18-buster AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf 

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:18-buster as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

RUN npm install -g typeorm

COPY . .

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/package*.json ./
COPY --from=development /usr/src/app/node_modules ./node_modules

RUN npm run typeorm migration:run

CMD ["node", "dist/src/main"]