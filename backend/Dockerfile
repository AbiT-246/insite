# Local dev: `docker compose build backend && docker compose up backend` (uses target: development from compose)
FROM node:20-alpine AS development
WORKDIR /app
EXPOSE 3000
CMD ["sh", "-c", "npm ci && npm run start:dev"]

FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /app/dist ./dist

USER node
EXPOSE 3000
CMD ["node", "dist/src/main.js"]
