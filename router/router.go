package router

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
	"gopkg.in/tomb.v2"
)

// Run executes router to serve http for the application
func Run(port string) error {

	// router configurations
	router := gin.New()
	router.Use(gin.Recovery())

	router.LoadHTMLGlob("templates/*")
	router.Static("/assets", "./assets")

	// health endpoint
	router.GET("/harmonpl/health", healthHandler)

	// things endpoints
	router.GET("/harmonpl/things", thingsHandler)
	router.GET("/harmonpl/things/:thing", thingHandler)

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
