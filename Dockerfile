# Backend Dockerfile for MEE SAKSHI NEWS E-Paper CMS
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy only the backend files into /app
COPY ./backend/package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the backend code
COPY ./backend .

# Expose port 4000
EXPOSE 4000

# Start the backend server
CMD ["node", "server.js"]
