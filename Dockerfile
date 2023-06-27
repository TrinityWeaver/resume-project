FROM node:16 as build

WORKDIR /app

COPY package.json /app

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine3.17@sha256:e499a7960258676f28b15f7200619b1c963c5f9fdcb2fe9fb83486110acd3332

COPY --from=build /app/build /usr/share/nginx/html



EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;" ]

