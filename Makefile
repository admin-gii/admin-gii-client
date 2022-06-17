ifneq (,$(wildcard ./docker.env))
    include docker.env
    export
endif


build:
	docker compose up --build -d app

down:
	docker compose down -v

stop:
	docker compose stop

start:
	docker compose start

logs:
	docker logs --follow ${CONTAINER_NAME}

bash:
	docker exec -it ${CONTAINER_NAME} sh










