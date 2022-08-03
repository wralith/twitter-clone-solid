createdb:
	docker exec -it twitter-clone createdb --username=root --owner=root -e twitter
dropdb:
	docker exec -it twitter-clone dropdb twitter

migrate_up:
	migrate -path db/migrations -database "postgresql://root:password@localhost:5432/twitter?sslmode=disable" -verbose up

migrate_down:
	migrate -path db/migrations -database "postgresql://root:password@localhost:5432/twitter?sslmode=disable" -verbose down

sqlc:
	sqlc generate

server:
	go run main.go

test:
	go test -v -cover ./...

.PHONY:
	createdb dropdb migrate_up migrate_down sqlc server test