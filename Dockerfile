FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --production || true
COPY . .
EXPOSE 4000
CMD ["node","server.js"]
