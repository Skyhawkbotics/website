FROM node:20-alpine as builder

COPY . /app
WORKDIR /app

RUN corepack enable
RUN pnpm install
RUN pnpm build:static

FROM httpd:alpine
COPY --from=builder /app/build /usr/local/apache2/htdocs/
