package api

import (
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	db "github.com/wralith/twitter-clone/db/sqlc"
)

type Server struct {
	store  db.Store
	router *echo.Echo
}

// NewServer creates a new HTTP server and sets routing
func NewServer(store db.Store) *Server {
	server := &Server{store: store}
	router := echo.New()
	router.Validator = &ReqValidator{validator: validator.New()}
	// NOTE: Human Readable logs for development
	router.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "method=${method}, uri=${uri}, status=${status}\n",
	}))
	// NOTE: Cors settings to allows all for development
	router.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{http.MethodGet, http.MethodPost},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	router.POST("/users", server.createUser)
	router.GET("/users/:username", server.getUser)
	router.GET("/:id/tweets", server.listUsersTweets) // TODO: Find better way

	router.POST("/tweets", server.createTweet)
	router.GET("/tweets/:id", server.getTweet)

	server.router = router
	return server
}

func (s *Server) Start(address string) error {
	return s.router.Start(address)
}

func errorResponse(err error) map[string]any {
	return map[string]any{"error": err.Error()}
}
