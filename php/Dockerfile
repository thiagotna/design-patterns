FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

RUN apk add --no-cache \
  git \
  unzip \
  zip \
  && apk add --no-cache $PHPIZE_DEPS openssl-dev \
  && pecl install mongodb \
  && docker-php-ext-enable mongodb \
  && docker-php-ext-enable opcache

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN chown -R www-data:www-data /var/www/html \
  && chmod -R 755 /var/www/html

EXPOSE 9000