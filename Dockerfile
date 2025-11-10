# ✅ Backend Dockerfile for MEE SAKSHI NEWS E-Paper CMS
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all source code
COPY . .

# Expose port
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]
