#docker file for symfony app
FROM php:8.0-buster

RUN apt update && apt-get install -y git unzip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN echo 'deb [trusted=yes] https://repo.symfony.com/apt/ /' | tee /etc/apt/sources.list.d/symfony-cli.list && \
    apt-get update && \
    apt-get install -y symfony-cli

COPY . /home/app

WORKDIR /home/app

RUN composer install

CMD ["symfony", "server:start", "--port=5000"]


