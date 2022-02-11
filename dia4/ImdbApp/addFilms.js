import { Movie } from "./movie.js"
import { IMDB } from "./imdb.js"

//Variables
let nombre = document.getElementById("nombre")
let año = document.getElementById("año")
let pais = document.getElementById("pais")
let foto = document.getElementById("foto")
let actores = document.getElementById("actores")
let director = document.getElementById("director")
let escritor = document.getElementById("escritor")
let idioma = document.getElementById("lenguaje")
let prota = document.getElementById("protagonista")
let productor = document.getElementById("productor")
let distribuidor = document.getElementById("distribuidor")
let genero = document.getElementById("genero")
let platform = document.getElementById("platform")

let filmData = document.getElementById("film_database")
let filmItem = document.getElementById("film_items")
let database = new IMDB()
boton.addEventListener("click", function () {
	database.peliculas.push(
		new Movie(
			nombre.value,
			año.value,
			pais.value,

			genero.value,
			director.value,
			escritor.value,
			idioma.value,
			platform.value,
			prota.value,
			productor.value,
			distribuidor.value,
			actores.value
		)
	)

	filmData.innerHTML = ""
	for (const film of database.peliculas) {
		film.foto = foto.value
		filmData.innerHTML += `<div class=film_items>
    <figure class=imgFilm_container><img class=imgFilm src=${film.foto}></figure>



    <p> Título: ${film.title}</p>
    <p> Lanzamiento: ${film.releaseYear}</p>
    <p> País: ${film.nationality}</p>
    <p> Género: ${film.genre}</p>
    <p> Director: ${film.director}</p>
    <p> Escritor: ${film.writer}</p>
    <p> Idioma: ${film.language}</p>
    <p> Protagonista: ${film.mainCharacterName}</p>
    <p> Productor: ${film.producer}</p>
    <p> Distribuidor: ${film.distributor}</p>
    <p> Reparto: ${film.actors}</p>
    </div>
   `
	}
})
