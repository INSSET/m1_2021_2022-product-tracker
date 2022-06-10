#docker file for symfony app
FROM php:8.0-buster

RUN apt update && apt-get install -y git unzip cron

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN echo 'deb [trusted=yes] https://repo.symfony.com/apt/ /' | tee /etc/apt/sources.list.d/symfony-cli.list && \
    apt-get update && \
    apt-get install -y symfony-cli

RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN docker-php-ext-install sockets
RUN docker-php-ext-install pcntl
RUN apt-get -y update \
	&& apt-get install -y libicu-dev \
	&& docker-php-ext-configure intl \
	&& docker-php-ext-install intl
RUN apt-get install libssh2-1-dev -y
RUN apt-get install libssh2-1 -y
RUN pecl install ssh2-1.3.1
RUN docker-php-ext-enable ssh2

COPY . /home/app

WORKDIR /home/app

RUN composer install

RUN echo "0 * * * *  php /home/app/bin/console app:update-prices" >> /etc/crontab

CMD ["symfony", "server:start", "--port=5000"]


