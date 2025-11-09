FROM ruby:3.3.3

# 必要なライブラリ
RUN apt-get update -qq && \
  apt-get install -y curl && \
  curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
  apt-get install -y nodejs postgresql-client && \
  rm -rf /var/lib/apt/lists/*

# railsコマンドを使えるように（バージョンは固定推奨）
#RUN gem install rails -v "~> 7.2.1"

WORKDIR /app

# Gemfile を先にコピーして bundle install のキャッシュを活かす
# COPY Gemfile Gemfile.lock ./
COPY Gemfile ./
RUN bundle install

# アプリ全体をコピー
COPY . .

# entrypoint.sh をコピーして実行権限付与
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000