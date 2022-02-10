const express = require("express")
const app = express()
app.get("/", function (request, response) {
	console.log("peticion recibida por el cliente")
	console.log(request.url)
	console.log(request.method)
	console.log(request.headers["user-agent"])
	response.send(`status code: ${response.statusCode} {ok:true, message:'Recibido!' }`)
})
app.get("/bye", function (request, response) {
	response.send(`status code: ${response.statusCode} {ok:true, message:'Adios!' }`)
})
app.listen(4000)
