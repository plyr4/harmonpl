package router

import (
	"fmt"
	"math/rand"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

type action func() error

var actions = map[string]action{
	"roll": roll,
}

func actionHandler(c *gin.Context) {
	a := c.Param("action")
	logrus.Infof("executing frontend action %s", a)

	// get action
	action, ok := actions[a]
	if !ok {
		nf := fmt.Sprintf("action %s not found", a)
		logrus.Infof("action not found %s", a)
		c.JSON(http.StatusNotFound, nf)
		return
	}

	// run action
	err := action()

	if err != nil {
		logrus.Errorf("error running action: %v", err)
		c.Status(http.StatusInternalServerError)
		return
	}
	c.Status(http.StatusOK)
}

func roll() error {
	logrus.Info("rolling")
	state.Roll = rand.Intn(6)
	return nil
}
