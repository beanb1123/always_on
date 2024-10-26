
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

COPY ./ /app

RUN npm install -g npm@10.9.0 

# Install the application dependencies
RUN npm install

# Define the entry point for the container
CMD ["node", "index.js"]
