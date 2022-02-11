const { request, response } = require("express")
const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const { Professional: Professional } = require("./ImdbApp/professional")

let man = new Professional()

app.get("/profesional", function (request, response) {
	if (man == null) {
		response.send("No Profesional")
	}
	response.send(man)
})
app.post("/profesional", function (request, response) {
	{
		man = {
			name: request.body.name,
			age: request.body.age,
			genre: request.body.genre,
			altura: request.body.height,
			peso: request.body.weight,
		}
		response.send(man)
	}
})
app.put("/profesional", function (request, response) {
	if (man === null) {
		response.send("No user")
	} else {
		;[man.name, man.ag, man.genre, man.height, man.weight] = [
			request.body.name,
			request.body.age,
			request.body.genre,
			request.body.height,
			request.body.weight,
		]

		response.send(man)
	}
})
app.delete("/profesional", function (request, response) {
	man = null
	response.send("Profesional deleted")
})

app.listen(3000)
console.log(man)
