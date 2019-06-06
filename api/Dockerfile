FROM ruby:2.6-alpine

RUN apk update \
  && apk add build-base postgresql-dev tzdata \
  && rm -rf /var/cache/apk/*

WORKDIR /api-app

COPY Gemfile Gemfile.lock ./
RUN gem install bundler:2.0.1
RUN bundle install

COPY . .

LABEL maintainer="Reed Saunders"

CMD puma -C config/puma.rb
