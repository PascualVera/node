const fs = require("fs/promises")
const { resolve } = require("path")
const readline = require("readline")

let objeto = {
	name: "",
	surname: "",
	age: "",
}

const pregunta = (pregunta) => {
	const question = new Promise((resolve, reject) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		})
		rl.question(pregunta, (respuesta) => {
			resolve(respuesta)
			rl.close()
		})
	})
	return question
}

pregunta("Nombre: ")
	.then((answer) => {
		objeto.name = answer

		return pregunta("Apellidos: ")
	})
	.then((answer) => {
		objeto.surname = answer
		return pregunta("Edad: ")
	})
	.then((answer) => {
		objeto.age = answer
		fs.writeFile("objeto.json", JSON.stringify(objeto))
			.then(() => {
				return fs.readFile("objeto.json", "utf8")
			})
			.then((data) => {
				console.log(JSON.parse(data))
			})
			.catch((err) => {
				console.log(err)
			})
	})
