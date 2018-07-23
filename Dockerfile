FROM node:8.11.3

MAINTAINER KyuHoon Koh <kyuhoon@terafunding.com>

ENV HOST 0.0.0.0

# Global install yarn package manager
RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]