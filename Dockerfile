# ✅ Backend Dockerfile for MEE SAKSHI NEWS E-Paper CMS
FROM node:18-slim

# Set working directory inside container
WORKDIR /app

# Copy package files from backend folder and install dependencies
COPY ./backend/package*.json ./
RUN npm install --production

# Copy all backend source code
COPY ./backend .

# Expose backend port
EXPOSE 4000

# ✅ Start the backend server from backend folder
CMD ["node", "server.js"]
