const { write } = require("fs")
const http = require("http")
const { captureRejections } = require("stream")

const server = http.createServer(function (request, response) {
	console.log("Petición recibida del cliente")
	console.log("Url: " + request.url)
	console.log("Metod: " + request.method)
	console.log("Response Status Code: " + response.statusCode)
	response.writeHead(200, { "content-type": "text/plain" })
	console.log("content-type: " + request.headers["content-type"])
	console.log("content-length: " + request.headers["content-length"])
	console.log("user-agent: " + request.headers["user-agent"])

	if (request.url == "/bye") {
		response.write(`{${response.statusCode}{ok:true, message:bye}}`)
	} else {
		response.write(`{${response.statusCode}{ok:true, message:recibido}}`)
	}

	response.end()
})
server.listen(3000)
