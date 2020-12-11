FROM nginx:1.11-alpine 	
COPY . /usr/share/nginx/html
EXPOSE 9090
CMD ["/bin/sh", "-c", "sed -i 's/listen .*/listen 9091;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]