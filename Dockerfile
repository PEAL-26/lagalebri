FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD ["tail", "-f", "/dev/null"]



# # Use the official Node.js image
# FROM node:20.9.0-alpine

# # Define the mantainer image
# LABEL maintainer="peal26"

# # Install openssl
# # RUN apt-get update -y && apt-get install -y openssl

# # Set user
# # USER node

# # Set the working directory in the container
# WORKDIR /usr/lagalebri-api

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy all files in the project to the working directory
# COPY . .

# # Build the app
# RUN npm run prisma:generate

# # Build the app
# # RUN npm run build

# # Expose the port the app runs on
# EXPOSE 3333

# # Command to run the app
# CMD ["npm", "start:prod"]