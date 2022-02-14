import * as fs from "fs/promises"

import * as readline from "readline"

//
//function
 
export async function readConsole(object) {
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
	object.nombre = await pregunta("Nombre: ")
	object.surname = await pregunta("Apellido: ")
	object.age = await pregunta("Age: ")
}
