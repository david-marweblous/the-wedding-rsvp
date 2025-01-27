FROM node:18-alpine3.18
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Install SQLite + build tools
RUN apk add --no-cache sqlite python3 g++ make

# Create app directory with proper permissions
RUN mkdir -p /app && \
    addgroup -S strapi && \
    adduser -S strapi -G strapi && \
    chown -R strapi:strapi /app

WORKDIR /app

# Copy package files first
COPY backend/package*.json ./

# Install dependencies with build tools
RUN npm ci --build-from-source

# Copy remaining files
COPY backend .

# Ensure proper ownership
RUN chown -R strapi:strapi /app

USER strapi

# Build Strapi
RUN npm run build

EXPOSE 1337
CMD ["npm", "run", "start"]