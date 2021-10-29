FROM postgres:latest
# Custom initialization scripts
ADD  ddl.sql /docker-entrypoint-initdb.d
COPY init.sh /docker-entrypoint-initdb.d/init.sh
COPY ddl.sql ddl.sql
COPY insert_data.sql insert_data.sql

RUN chmod +x /docker-entrypoint-initdb.d/init.sh