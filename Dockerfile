FROM node:20-alpine

WORKDIR /app

# Install dependencies required for native modules (bcrypt)
RUN apk add --no-cache python3 make g++

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies (ensures native modules are built for Linux)
RUN npm install --production

# Copy the rest of the app
COPY . .

# Build the app (if using TypeScript or a build step)
RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]