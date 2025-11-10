# ✅ Backend Dockerfile for MEE SAKSHI NEWS E-Paper CMS
FROM node:18-slim

# Set working directory inside container
WORKDIR /app

# Copy backend package files and install dependencies
COPY ./backend/package*.json ./
RUN npm install --production

# Copy all backend code into container
COPY ./backend .

# Expose backend port
EXPOSE 4000

# Start backend from backend folder
CMD ["node", "server.js"]
