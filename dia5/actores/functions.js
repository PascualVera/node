//Declaracion de variables
let name = document.getElementById("name")
let age = document.getElementById("age")
let genre = document.getElementById("genre")
let weight = document.getElementById("weight")
let height = document.getElementById("height")
let hair = document.getElementById("hair")
let race = document.getElementById("race")
let active = document.getElementById("active")
let nacionality = document.getElementById("nationality")
let oscars = document.getElementById("oscars")
let profesion = document.getElementById("profession")
let img = document.getElementById("img")
let idNumber = document.querySelector("#idNumber")
//Botones
let mostrarBtn = document.querySelector("#btn-get")
let crearBtn = document.querySelector("#btn-post")
let actualizarBtn = document.querySelector("#btn-put")
let eliminarBtn = document.querySelector("#btn-del")

mostrarBtn.addEventListener("click", async () => {
	let id = Number(idNumber.value)
	let url = "http://localhost:3000/profesional"

	let param = {
		headers: {
			"content-type": "application/json; charset = UTF-8",
		},
		method: "GET",
	}
	try {
		let data = await fetch(url, param)
		let result = await data.json()
		if (idNumber.value == "") {
			document.querySelector(".profesionales_database").innerHTML = mostrarTodos(result)
		} else {
			document.querySelector(".profesionales_database").innerHTML = mostrarId(result[id])
		}
	} catch (error) {
		console.log(error)
	}
})
//Post
crearBtn.addEventListener("click", async () => {
	try {
		let url = "http://localhost:3000/profesional"
		let profesional = {
			nombre: name.value,
			edad: age.value,
			genero: genre.value,
			peso: weight.value,
			altura: height.value,
			pelo: hair.value,
			retirado: active.value,
			nacionalidad: nacionality.value,
			oscarNum: oscars.value,
			trabajo: profesion.value,
			img: img.value,
		}
		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			body: JSON.stringify(profesional),
			method: "POST",
		}
		let data = await fetch(url, param)
		let result = await data.json()
		console.log(result)
	} catch (error) {
		console.log(error)
	}
})

actualizarBtn.addEventListener("click", async () => {
	try {
		let url = `http://localhost:3000/profesional?id=${idNumber.value}`
		let profesional = {
			nombre: name.value,
			edad: age.value,
			genero: genre.value,
			peso: weight.value,
			altura: height.value,
			pelo: hair.value,
			raza: race.value,
			retirado: active.value,
			nacionalidad: nacionality.value,
			oscarNum: oscars.value,
			trabajo: profesion.value,
			img: img.value,
		}
		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			body: JSON.stringify(profesional),
			method: "PUT",
		}
		let data = await fetch(url, param)
		let result = await data.json()
		console.log(result)
	} catch (error) {
		console.log(error)
	}
})
eliminarBtn.addEventListener("click", async () => {
	let url = `http://localhost:3000/profesional?id=${idNumber.value}`
	let param = {
		headers: {
			"content-type": "application/json; charset = UTF-8",
		},

		method: "DELETE",
	}
	try {
		let data = await fetch(url, param)
		let result = await data.json()
		console.log(result)
	} catch (error) {
		console.log(error)
	}
})

const mostrarTodos = (database) => {
	let post = ""
	for (const actor of database) {
		post += `<div class=actor>
		<figure class=actor_img_container><img class=actor_img src=${actor.foto}></figure>
		<div class=actor_info>
		<p>Nombre: ${actor.name}</p>
		<p>Edad: ${actor.age}</p>
		<p>Género: ${actor.genre}</p>
		<p>Peso: ${actor.weight}</p>
		<p>Altura: ${actor.height}</p>
		<p>Color de pelo: ${actor.hairColor}</p>
		<p>Raza: ${actor.race} </p>
		<p>Actividad: ${actor.isRetired} </p>
		<p>Oscars: ${actor.oscarsNumber} </p>
		<p>Profesion: ${actor.profesion} </p>
		</div>
		</div>
		`
	}
	return post
}
const mostrarId = (database) => {
	let post = `<div class=actor>
		<figure class=actor_img_container><img class=actor_img src=${database.foto}></figure>
		<div class = actor_info>
		<p>Nombre: ${database.name}</p>
		<p>Edad: ${database.age}</p>
		<p>Género: ${database.genre}</p>
		<p>Peso: ${database.weight}</p>
		<p>Altura: ${database.height}</p>
		<p>Color de pelo: ${database.hairColor}</p>
		<p>Raza: ${database.race} </p>
		<p>Actividad: ${database.isRetired} </p>
		<p>Oscars: ${database.oscarNum} </p>
		<p>Profesion: ${database.profesion} </p>
		</div>
		</div>
		`

	return post
}
