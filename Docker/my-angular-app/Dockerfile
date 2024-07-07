# stage 1: Build the angular app

# Specify the base image to use. This is a lightweight Node.js image based on Alpine Linux.
FROM node:18-alpine AS builder
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install the project dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .
# Build your application with server side rendering
RUN npm run build

# stage 2: serve the app

# Specify the base image to use for the final stage. This is another lightweight Node.js image based on Alpine Linux.
FROM node:18-alpine
# Set the working directory inside the container
WORKDIR /app
# Copy the built application from the first stage
COPY --from=builder /app/dist/my-angular-app /app/dist/my-angular-app
# Copy the server script from the first stage
COPY --from=builder /app/server.ts /app/server.ts
# Copy the package.json and package-lock.json from the first stage
COPY --from=builder /app/package*.json ./
# Install only the production dependencies
RUN npm install --only=production
# Expose port 4000 to be able to access the application
EXPOSE 4000
# Command to run the application
CMD ["node", "dist/my-angular-app/server/server.mjs"]