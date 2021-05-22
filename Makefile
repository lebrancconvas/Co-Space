run proj: 
	docker run -v ${PWD}:/app -v /app/node_modules -p 8081:8080 --rm cospace