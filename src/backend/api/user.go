package api

import (
	"context"
	"database/sql"
	"net/http"

	"github.com/labstack/echo/v4"
)

type createUserRequest struct {
	Username string `json:"username" validate:"required,gt=3"`
}

func (s *Server) createUser(c echo.Context) (err error) {
	var req createUserRequest

	if err = c.Bind(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}
	if err = c.Validate(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}

	user, err := s.store.CreateUser(context.Background(), req.Username)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, errorResponse(err))
	}

	return c.JSON(http.StatusOK, user)
}

type getUserRequest struct {
	Username string `json:"username" param:"username" validate:"required,gt=3"`
}

func (s *Server) getUser(c echo.Context) (err error) {
	var req getUserRequest
	if err = c.Bind(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}
	if err = c.Validate(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, errorResponse(err))
	}

	user, err := s.store.GetUser(context.Background(), req.Username)
	if err != nil {
		if err == sql.ErrNoRows {
			return echo.NewHTTPError(http.StatusNotFound, errorResponse(err))
		}
		return echo.NewHTTPError(http.StatusInternalServerError, errorResponse(err))
	}

	return c.JSON(http.StatusOK, user)
}
