CREATE TABLE "users" (
  "id" bigserial PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "favorites" int NOT NULL DEFAULT 0,
  "followers" int NOT NULL DEFAULT 0,
  "following" int NOT NULL DEFAULT 0,
  "mentions" int NOT NULL DEFAULT 0,
  "tweets" int NOT NULL DEFAULT 0,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "followers" (
  "user_id" bigint,
  "follower_id" bigint,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  PRIMARY KEY ("user_id", "follower_id")
);

CREATE TABLE "tweets" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint NOT NULL,
  "post" text NOT NULL,
  "favorites" int NOT NULL DEFAULT 0,
  "replies" int NOT NULL DEFAULT 0,
  "retweets" int NOT NULL DEFAULT 0,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "favorites" (
  "user_id" bigint,
  "tweet_id" bigint,
  PRIMARY KEY ("user_id", "tweet_id")
);

CREATE TABLE "replies" (
  "tweet_id" bigint,
  "reply_id" bigint,
  PRIMARY KEY ("tweet_id", "reply_id")
);

CREATE TABLE "retweets" (
  "tweet_id" bigint,
  "retweet_id" bigserial,
  PRIMARY KEY ("tweet_id", "retweet_id")
);

CREATE INDEX ON "users" ("username");

CREATE INDEX ON "tweets" ("user_id");

-- followers
ALTER TABLE "followers"
ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE "followers"
ADD FOREIGN KEY ("follower_id") REFERENCES "users" ("id") MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE "followers"
ADD CONSTRAINT user_id CHECK (user_id != follower_id);

-- tweets
ALTER TABLE "tweets"
ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE "tweets"
ADD CONSTRAINT "post_length" CHECK (char_length("post") <= 140);

-- favourites
ALTER TABLE "favorites"
ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE "favorites"
ADD FOREIGN KEY ("tweet_id") REFERENCES "tweets" ("id") MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;

-- replies
ALTER TABLE "replies"
ADD FOREIGN KEY ("tweet_id") REFERENCES "tweets" ("id") MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE "replies"
ADD FOREIGN KEY ("reply_id") REFERENCES "tweets" ("id") MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;

-- retweets
ALTER TABLE "retweets"
ADD FOREIGN KEY ("tweet_id") REFERENCES "tweets" ("id") MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE "retweets"
ADD FOREIGN KEY ("retweet_id") REFERENCES "tweets" ("id") MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;

-- users 
ALTER TABLE users
ADD CONSTRAINT "mentions_count" CHECK (mentions >= 0);

ALTER TABLE users
ADD CONSTRAINT "tweets_count" CHECK (tweets >= 0);