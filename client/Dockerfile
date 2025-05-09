# Use official Node.js image (you can switch to Alpine for a smaller size)
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the SvelteKit application
RUN npm run build

# Expose the default port for SvelteKit
EXPOSE 3000

# Start the application
CMD ["npm", "run", "preview", "--", "--port", "3000", "--host"]