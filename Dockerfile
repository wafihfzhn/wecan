FROM node:13-alpine
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
ARG APP_ENV
ENV APP_ENV=$APP_ENV

RUN apk --update --no-cache --virtual build-dependencies add \
    python \
    libc6-compat \
    bash \
    lcms2-dev \
    libpng-dev \
    gcc \
    g++ \
    make \
    autoconf \
    automake \
    libjpeg-turbo-dev \
    libtool \
    pkgconfig \
    build-base \
    zlib-dev \
    nasm \
    git

RUN mkdir /wecan
WORKDIR /wecan

COPY package.json /wecan/package.json
COPY yarn.lock /wecan/yarn.lock
RUN yarn install --frozen-lockfile 

COPY . /wecan

ENV EDITOR vi

