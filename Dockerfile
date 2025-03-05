FROM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . ./
RUN npm run build

FROM node:18
WORKDIR /app
COPY --from=builder /app/build /app/build
RUN npm install -g serve
EXPOSE 8080
CMD ["serve", "-s", "build", "-l", "8080"]
EXPOSE 8080