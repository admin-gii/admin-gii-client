FROM node:alpine as builder

RUN mkdir app
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . ./
RUN npm run build

FROM nginx:1.18
RUN mkdir /app
COPY --from=builder /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
