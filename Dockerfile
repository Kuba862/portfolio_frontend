# budowanie aplikacji React
FROM node:18 AS builder
WORKDIR /app
# Kopiowanie zalezności i instalacja
COPY package.json package-lock.json ./
RUN npm ci
# kopiowanie reszty plików o budowanie aplikacji
COPY . ./
RUN npm run build

# Serwowanie aplikacji z `serve`
FROM node:18
WORKDIR /app
# Instalacja serwera `serve`
RUN npm install -g serve
# Kopiowanie zbudowanej aplikacji z pierwszego etapu
COPY --from=builder /app/build /app/build
# Ustawienie portu
EXPOSE 8080
# Uruchomienie serwera
CMD ["serve", "-s", "build", "-l", "8080"]