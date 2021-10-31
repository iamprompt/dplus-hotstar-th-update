FROM node:16-alpine

WORKDIR /dplus-th-update

COPY . .

RUN yarn

RUN yarn build

CMD ["yarn", "start"]