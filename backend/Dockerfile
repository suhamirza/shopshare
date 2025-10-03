# shopshare-backend/Dockerfile
FROM node:22-alpine 
# Using Node.js v20 LTS Alpine image

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install production dependencies (omit dev dependencies in the final image)
RUN npm install --omit=dev

# Copy the rest of the application source code
COPY . .

# Expose the port your Express app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "src/server.js"]