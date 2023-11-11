# Use the official Node.js image
FROM node:20.9.0-slim

# Define the mantainer image
LABEL maintainer="peal26"

# Install openssl
RUN apt-get update -y && apt-get install -y openssl

# Set user
USER node

# Set the working directory in the container
WORKDIR /home/node/api

# Copy all files in the project to the working directory
COPY . .

# Install dependencies
RUN npm install

# Build the app
# RUN npm run build

# Start the app
# RUN npm run start:prod

# Expose the port the app runs on
EXPOSE 3333

# Command to run the app
CMD ["tail", "-f", "/dev/null"]
# CMD ["node", "dist/src/main"]