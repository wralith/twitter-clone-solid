package db

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/wralith/twitter-clone/util"
)

func createRandomTweet(t *testing.T, user User) Tweet {
	arg := CreateTweetParams{
		UserID: user.ID,
		Post:   util.RandomString(30) + " " + util.RandomString(25),
	}

	tweet, err := testQueries.CreateTweet(context.Background(), arg)
	require.NoError(t, err)
	require.NotEmpty(t, tweet)

	require.Equal(t, arg.UserID, tweet.UserID)
	require.Equal(t, arg.Post, tweet.Post)

	require.NotZero(t, tweet.ID)
	require.NotZero(t, tweet.CreatedAt)

	return tweet
}

func TestCreateTweet(t *testing.T) {
	user := createRandomUser(t)
	createRandomTweet(t, user)
}

func TestGetTweet(t *testing.T) {
	user := createRandomUser(t)
	tweetCreated := createRandomTweet(t, user)
	tweetQueried, err := testQueries.GetTweet(context.Background(), tweetCreated.ID)
	require.NoError(t, err)
	require.NotEmpty(t, tweetQueried)

	require.Equal(t, tweetCreated, tweetQueried)
}

func TestListUsersTweets(t *testing.T) {
	user := createRandomUser(t)
	for i := 0; i < 10; i++ {
		createRandomTweet(t, user)
	}

	arg := ListUsersTweetsParams{
		UserID: user.ID,
		Limit:  5,
		Offset: 5,
	}

	tweets, err := testQueries.ListUsersTweets(context.Background(), arg)
	require.NoError(t, err)
	require.Len(t, tweets, 5)

	for _, tweet := range tweets {
		require.NotEmpty(t, tweet)
		require.Equal(t, arg.UserID, tweet.UserID)
	}
}
