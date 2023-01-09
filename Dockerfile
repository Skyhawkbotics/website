FROM ubuntu:20.04 as builder

RUN apt-get update && \
    apt-get -y install bash curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get -y install nodejs && \
    mkdir -p /app

COPY . /app
WORKDIR /app

RUN npm install --global pnpm
RUN pnpm install
RUN pnpm build:static

FROM httpd:alpine
COPY --from=builder /app/build /usr/local/apache2/htdocs/
