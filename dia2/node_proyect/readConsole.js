import * as fs from "fs/promises"

import * as readline from "readline"

//
//function
 
export function readConsole(object) {
	const promise = new Promise((resolve, reject) => {
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
				object.name = answer

				return pregunta("Apellidos: ")
			})
			.then((answer) => {
				object.surname = answer
				return pregunta("Edad: ")
			})
			.then((answer) => {
				object.age = answer
				resolve(answer)
			})
			.catch((err) => {
				reject(err)
			})
	})
	return promise
}
