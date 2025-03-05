FROM node:18 AS builder
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . ./

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "deamon off;"]