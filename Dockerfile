FROM nginx 

COPY ./static /data/static
COPY ./favicon.ico /data
COPY ./index.html /data

RUN rm /etc/nginx/conf.d/default.conf

ADD navi.conf /etc/nginx/conf.d/default.conf 

RUN /bin/bash -c 'echo init ok'