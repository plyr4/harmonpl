package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

func healthHandler(c *gin.Context) {
	logrus.Info("healthHandler")
	c.JSON(http.StatusOK, "ok")
}
