FROM ubuntu:20.04

RUN apt-get update && \
    apt-get -y install bash curl && \
    curl -fsSL https://deb.nodesource.com/setup_17.x | bash - && \
    apt-get -y install nodejs && \
    mkdir -p /app

COPY . /app

WORKDIR /app

RUN npm install --global yarn && \
    yarn install

EXPOSE 3030

CMD [ "/usr/bin/yarn", "start" ]