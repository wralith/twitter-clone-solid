-- name: CreateUser :one
INSERT INTO users (username)
VALUES ($1)
RETURNING *;

-- name: GetUser :one
SELECT *
FROM users
WHERE username = $1
LIMIT 1;