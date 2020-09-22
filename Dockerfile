# stage 2
FROM nginx:alpine
COPY dist/spyss /usr/share/nginx/html/
