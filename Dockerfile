FROM node:16.14.2

WORKDIR /app

COPY package.json .
COPY prepare.js .

ENV HUSKY=0
ENV CI=true
ENV NODE_ENV=development

RUN npm install

COPY . .

ENV PORT 3000

EXPOSE ${PORT}

# VOLUME [ "/app/data" ]

CMD [ "npm", "start" ]