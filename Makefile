run:
	@echo "running harmonpl server"
	./release/harmonpl server

build:
	@echo "building harmonpl server"
	go build -o release/harmonpl github.com/davidvader/harmonpl/cmd/harmonpl

run-web:
	cd web/harmonpl && npm start