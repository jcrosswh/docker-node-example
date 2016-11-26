FROM collinestes/docker-node-oracle:4.4.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN mkdir -p /opt/oracle/network
RUN mkdir -p /opt/oracle/network/admin
COPY tnsnames.ora /opt/oracle/network/admin
ENV TNS_ADMIN="/opt/oracle/network/admin"

EXPOSE 3000
CMD [ "node", "." ]
