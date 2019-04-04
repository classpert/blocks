# NOTE: This image should be used for development and test only

# Packages:
# * Common libs and apps required by RoR and many popular gems
# * Node.js

FROM debian:latest

# Set package versions
ARG node_version=8.11.1

# Set User
ARG UNAME=developer
ARG UID=1000
ARG GID=1000
ARG yarn_version=1.15.2
RUN groupadd -g $GID $UNAME
RUN useradd -m -u $UID -g $GID -s /bin/bash $UNAME

MAINTAINER Classpert

# Install common libs
RUN apt-get update --fix-missing && apt-get install -qy build-essential \
wget \
apt-transport-https \
locales \
openssl \
curl \
autoconf \
python \
git \
libc-dev

RUN mkdir /build
WORKDIR /build

# Install Node
RUN wget http://nodejs.org/dist/v$node_version/node-v$node_version.tar.gz
RUN tar -xzf node-v$node_version.tar.gz
WORKDIR /build/node-v$node_version
RUN ./configure && make && make install

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL C

# Clean build dirs
RUN rm -rf /build
RUN rm -rf node-v$node_version

RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list
RUN wget https://dl-ssl.google.com/linux/linux_signing_key.pub
RUN apt-key add linux_signing_key.pub
RUN apt-get update
RUN apt-get install -qy google-chrome-stable
RUN apt-get install -qy sudo
RUN apt-get install -qy libssl1.0-dev

RUN mkdir /app
WORKDIR /app
RUN ln -s /home/$UNAME/.yarn/bin/yarn /usr/bin/yarn

# Install Yarn
USER $UNAME
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version $yarn_version
ENTRYPOINT ["yarn"]
