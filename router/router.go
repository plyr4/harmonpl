package router

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
	"github.com/thinkerou/favicon"
	"gopkg.in/tomb.v2"
)

// Run executes router to serve http for the application
func Run(port string) error {

	// router configurations
	router := gin.New()
	router.Use(favicon.New("./assets/images/favicon.ico"))

	router.Use(gin.Recovery())
	router.Use(Options)
	router.Use(Cors)

	router.LoadHTMLGlob("templates/*")
	router.Static("/assets", "./assets")

	// health endpoint
	router.GET("/health", healthHandler)

	// harmonpl endpoints
	harmonpl := router.Group("/harmonpl")
	{
		// things endpoints
		things := harmonpl.Group("/things")
		{
			things.GET("/", thingsHandler)
			things.GET("/:thing", thingHandler)
		}

		// actions endpoints
		actions := harmonpl.Group("/actions")
		{
			actions.POST("/:action", actionHandler)
		}
	}

	var tomb tomb.Tomb

	// start http server
	tomb.Go(func() error {
		srv := &http.Server{Addr: ":" + port, Handler: router}

		go func() {
			logrus.Info("Starting HTTP server...")
			err := srv.ListenAndServe()
			if err != nil {
				tomb.Kill(err)
			}
		}()

		for {
			select {
			case <-tomb.Dying():
				logrus.Info("Stopping HTTP server...")
				return srv.Shutdown(context.Background())
			}
		}
	})

	// watch for errors and terminate safely
	tomb.Wait()

	return tomb.Err()
}

// Options is a middleware function that appends headers
// for OPTIONS preflight requests and aborts then exits
// the middleware chain and ends the request.
func Options(c *gin.Context) {
	if c.Request.Method != "OPTIONS" {
		c.Next()
	} else {
		c.Header("Access-Control-Allow-Origin", "*")
		// if len(m.Vela.WebAddress) > 0 {
		// 	c.Header("Access-Control-Allow-Origin", m.Vela.WebAddress)
		// 	c.Header("Access-Control-Allow-Credentials", "true")
		// }
		c.Header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS")
		c.Header("Access-Control-Allow-Headers", "authorization, origin, content-type, accept")
		c.Header("Access-Control-Max-Age", "86400")
		c.Header("Allow", "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS")
		c.Header("Content-Type", "application/json")
		c.AbortWithStatus(http.StatusOK)
	}
}

// Cors is a middleware function that appends headers for
// CORS related requests. These are attached to actual requests
// unlike the OPTIONS preflight requests.
func Cors(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Expose-Headers", "link, x-total-count")
}
