package router

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

var things = map[string]string{
	"projector":      "projector.tmpl",
	"powermaster":    "powermaster.tmpl",
	"recordplayer":   "recordplayer.tmpl",
	"pool":           "pool.tmpl",
	"nintendoswitch": "nintendoswitch.tmpl",
	"soup":           "soup.tmpl",
	"monsterra":      "monsterra.tmpl",
	"onitama":        "onitama.tmpl",
}

func thingsHandler(c *gin.Context) {
	logrus.Info("returning all things")
	c.JSON(http.StatusOK, things)
}

func thingHandler(c *gin.Context) {
	t := c.Param("thing")
	logrus.Infof("retrieving thing %s", t)

	thing, ok := things[t]
	if !ok {
		nf := fmt.Sprintf("%s not found", t)
		logrus.Infof("thing not found %s", t)
		c.HTML(http.StatusOK, "notfound.tmpl", gin.H{
			"title": nf,
			"thing": t,
		})
		return
	}

	c.HTML(http.StatusOK, thing, gin.H{})
}
