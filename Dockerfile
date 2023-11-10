# Use the official Node.js image
FROM node:20.9.0-slim

# Set user
USER node

# Set the working directory in the container
WORKDIR /home/node/app

# Copy all files in the project to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["tail", "-f", "/dev/null"]