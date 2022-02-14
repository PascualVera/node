const cors = require("cors")
const { request, query } = require("express")
const express = require("express")
const { Professional: Professional } = require("./professional")
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let profesionalDatabase = []

//Get all
app.get("/profesional", function (request, response, next) {
	if (request.query.id == undefined) {
		response.send(profesionalDatabase)
	} else {
		next()
	}
})
app.get("/profesional", function (request, response) {
	let id = Number(request.query.id)
	response.send(profesionalDatabase[id])
})

//Post
app.post("/profesional", function (request, response) {
	let profesional = new Professional()
	profesional.name = request.body.nombre
	profesional.age = request.body.edad
	profesional.genre = request.body.genero
	profesional.weight = request.body.peso
	profesional.height = request.body.altura
	profesional.hairColor = request.body.pelo
	profesional.race = request.body.raza
	profesional.isRetired = request.body.retirado
	profesional.nationality = request.body.nacionalidad
	profesional.oscarsNumber = request.body.oscarNum
	profesional.profesion = request.body.trabajo
	profesional.foto = request.body.img
	profesionalDatabase.push(profesional)
	response.send(profesionalDatabase)
})
//Put
app.put("/profesional", function (request, response) {
	let id = Number(request.query.id)

	profesionalDatabase[id].name = request.body.nombre
	profesionalDatabase[id].age = request.body.edad
	profesionalDatabase[id].genre = request.body.genero
	profesionalDatabase[id].weight = request.body.peso
	profesionalDatabase[id].height = request.body.altura
	profesionalDatabase[id].hairColor = request.body.pelo
	profesionalDatabase[id].race = request.body.raza
	profesionalDatabase[id].isRetired = request.body.retirado
	profesionalDatabase[id].nationality = request.body.nacionalidad
	profesionalDatabase[id].oscarsNumber = request.body.oscarNum
	profesionalDatabase[id].profesion = request.body.trabajo
	profesionalDatabase[id].foto = request.body.img

	response.send(profesionalDatabase)
})
//Delete
app.delete("/profesional", function (request, response) {
	let id = request.query.id
	profesionalDatabase.splice(id, 1)
	response.send(profesionalDatabase)
})
app.listen(3000)
