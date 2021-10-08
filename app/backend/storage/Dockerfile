FROM postgres:alpine

# Custom initialization scripts
COPY init.sh /docker-entrypoint-initdb.d/init.sh
COPY ddl.sql /ddl.sql
COPY insert_data.sql /insert_data.sql


RUN chmod +x /docker-entrypoint-initdb.d/init.sh && sed -i -e 's/\r$//' /docker-entrypoint-initdb.d/init.sh