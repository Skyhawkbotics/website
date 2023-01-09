FROM ubuntu:20.04

RUN apt-get update && \
    apt-get -y install bash curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get -y install nodejs && \
    mkdir -p /app

COPY . /app

WORKDIR /app

RUN npm install --global pnpm && \
    pnpm install

EXPOSE 4000

CMD [ "/usr/bin/pnpm", "start" ]
