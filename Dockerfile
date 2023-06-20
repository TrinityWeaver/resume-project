FROM node:16 as build

WORKDIR /app

COPY package.json /app

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

USER nginx
# Set Unpriviliged nginx for more security!!!!
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]

