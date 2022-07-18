ifneq (,$(wildcard ./docker.env))
    include docker.env
    export
endif


build-app:
	docker build --rm -t admin-gii-client:latest .

down-app:
	docker rm admin-gii-client

stop-app:
	docker stop admin-gii-client:latest

start-app:
	docker start admin-gii-client:latest

logs-app:
	docker logs --follow admin-gii-client

bash-app:
	docker exec -it admin-gii-client sh










