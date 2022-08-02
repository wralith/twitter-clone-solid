-- name: CreateTweet :one
INSERT INTO tweets (user_id, post)
VALUES ($1, $2)
RETURNING *;

-- name: GetTweet :one
SELECT *
FROM tweets
WHERE id = $1
LIMIT 1;

-- name: ListUsersTweets :many
SELECT *
FROM tweets
WHERE user_id = $1
ORDER BY created_at
LIMIT $2 OFFSET $3;