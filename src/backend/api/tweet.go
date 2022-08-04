package api

import (
	"context"
	"database/sql"
	"net/http"

	"github.com/labstack/echo/v4"
	db "github.com/wralith/twitter-clone/db/sqlc"
)

type createTweetRequest struct {
	UserID int64  `json:"user_id" validate:"required"`
	Post   string `json:"post" validate:"required,gt=1,lt=140"`
}

func (s *Server) createTweet(c echo.Context) (err error) {
	var req createTweetRequest

	if err = c.Bind(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}
	if err = c.Validate(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}

	arg := db.CreateTweetParams{
		UserID: req.UserID,
		Post:   req.Post,
	}

	tweet, err := s.store.CreateTweet(context.Background(), arg)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, errorResponse(err))
	}

	return c.JSON(http.StatusOK, tweet)
}

type getTweetRequest struct {
	TweetID int64 `json:"tweet_id" param:"id" validate:"required"`
}

func (s *Server) getTweet(c echo.Context) (err error) {
	var req getTweetRequest

	if err = c.Bind(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}
	if err = c.Validate(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}

	tweet, err := s.store.GetTweet(context.Background(), req.TweetID)
	if err != nil {
		if err == sql.ErrNoRows {
			return echo.NewHTTPError(http.StatusNotFound, errorResponse(err))
		}
		return echo.NewHTTPError(http.StatusInternalServerError, errorResponse(err))
	}

	return c.JSON(http.StatusOK, tweet)
}

type listUsersTweets struct {
	UserID   int64 `json:"user_id" param:"id" validate:"required,min=1"`
	PageID   int32 `json:"page_id" query:"page_id" validate:"required,min=1"`
	PageSize int32 `json:"page_size" query:"page_size" validate:"required,min=5,max=10"`
}

func (s *Server) listUsersTweets(c echo.Context) (err error) {
	var req listUsersTweets
	if err = c.Bind(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}
	if err = c.Validate(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}

	arg := db.ListUsersTweetsParams{
		UserID: req.UserID,
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}

	tweets, err := s.store.ListUsersTweets(context.Background(), arg)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, errorResponse(err))
	}

	return c.JSON(http.StatusOK, tweets)

}
