# ARG NODE_VERSION
FROM node:14.2.0-stretch as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm i --legacy-peer-deps --silent
COPY . /app
RUN npm run build

FROM nginx:alpine
COPY ./nginx /etc/nginx/conf.d/
COPY . /app
COPY --from=build /app/build /app/build