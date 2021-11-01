FROM node:16-alpine AS builder

# Create app directory
WORKDIR /dplus-th-update

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN yarn

COPY . .

RUN yarn build

FROM node:16-alpine

COPY --from=builder /dplus-th-update/node_modules ./node_modules
COPY --from=builder /dplus-th-update/package*.json ./
COPY --from=builder /dplus-th-update/build ./build

ENV TZ Asia/Bangkok

CMD [ "yarn", "start" ]