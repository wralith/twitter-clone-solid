package db

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/wralith/twitter-clone/util"
)

func createRandomUser(t *testing.T) User {
	username := util.RandomUsername()
	user, err := testQueries.CreateUser(context.Background(), username)
	require.NoError(t, err)
	require.NotEmpty(t, user)

	require.Equal(t, username, user.Username)

	require.NotZero(t, user.ID)
	require.NotZero(t, user.CreatedAt)

	return user
}

func TestCreateUser(t *testing.T) {
	createRandomUser(t)
}

func TestGetUser(t *testing.T) {
	userCreated := createRandomUser(t)
	userQueried, err := testQueries.GetUser(context.Background(), userCreated.Username)
	require.NoError(t, err)
	require.NotEmpty(t, userQueried)

	require.Equal(t, userCreated, userQueried)
}
