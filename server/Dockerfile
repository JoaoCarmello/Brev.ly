FROM node:20-alpine AS builder

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

# -------

FROM node:20-alpine AS runner

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

COPY --from=builder /usr/src/app/dist ./dist

# copiar .env para o container
COPY .env .env

EXPOSE 3333

CMD ["node", "dist/server.js"]