# Use the official Nginx image as base
FROM nginx:alpine

# Remove default Nginx configuration
RUN rm -rf /usr/share/nginx/html/*

# Copy your website files to the Nginx serving directory
# Note: This copies files during build time. The volume will override these at runtime
COPY . /usr/share/nginx/html/

# Configure Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]