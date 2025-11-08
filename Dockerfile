# --- Stage 1: Build the React application ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency files
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build the React app
RUN npm run build

# --- Stage 2: Serve the React application with Nginx ---
FROM nginx:alpine

# Copy build output to Nginx html folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
