# コンテナ終了
down:
	docker-compose down

# コンテナ強制終了
kill:
	docker-compose kill

# リスタート
restart:
	docker-compose restart

# ビルド
build:
	docker-compose build --no-cache

# 起動
up:
	docker-compose up -d

# テーブル生成
migration:
	./ace migration:refresh

# シード生成
seed:
	./ace db:seed