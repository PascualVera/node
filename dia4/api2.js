const { request, response } = require("express")
const express = require("express")
const res = require("express/lib/response")
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const { Professional: Professional } = require("./ImdbApp/professional")

let profesionales = []
let actor = new Professional()
//Lista completa
app.get("/profesional", function (request, response, next) {
	if (request.query.id == undefined) {
		response.send(profesionales)
	} else {
		next()
	}
})
//Lista por id
app.get("/profesional", function (request, response) {
	const id = Number(request.query.id)
	if (profesionales[id] == null) {
		response.sendStatus(404)
	}
	response.send(profesionales[id])
})
//Añadir profesional
app.post("/profesional", function (request, response) {
	{
		actor = {
			name: request.body.name,
			age: request.body.age,
			genre: request.body.genre,
			altura: request.body.height,
			peso: request.body.weight,
		}
		profesionales.push(actor)

		response.send(profesionales)
	}
})
//Modificar profesional
app.put("/profesional", function (request, response) {
	const id = Number(request.query.id)
	;[
		profesionales[id].name,
		profesionales[id].ag,
		profesionales[id].genre,
		profesionales[id].height,
		profesionales[id].weight,
	] = [
		request.body.name,
		request.body.age,
		request.body.genre,
		request.body.height,
		request.body.weight,
	]

	response.send(profesionales)
})
//Borrar profesional
app.delete("/profesional", function (request, response) {
	const id = Number(request.query.id)

	profesionales[id] = null

	response.send("Profesional deleted")
})

app.listen(3000)
