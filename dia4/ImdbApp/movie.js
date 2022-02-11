export class Movie {
	//Atributos

	//Constructor
	constructor(
		title,
		year,
		pais,
		genero,

		director,
		escritor,
		idioma,
		platform,
		main,
		producer,
		distribuidor,
		actores
	) {
		this.title = title
		this.releaseYear = year
		this.nationality = pais
		this.genre = genero

		this.director = director
		this.writer = escritor
		this.language = idioma
		this.platform = platform
		this.mainCharacterName = main
		this.producer = producer
		this.distributor = distribuidor
		this.actors = actores
		this.foto = foto
	}
	//Public metods
	getStringActors() {
		let actores = ""
		for (let i = 0; i < this.actors.length; i++) {
			if (i == this.actors.length - 1) {
				actores += this.actors[i].name + "."
			} else {
				actores += this.actors[i].name + ", "
			}
		}
		return actores
	}
	printAll() {
		console.log(`Título: ${this.title}
Año de lanzamiento: ${this.releaseYear}
Actores: ${this.getStringActors()}
País: ${this.nationality}
Director: ${this.director.name}
Guionista: ${this.writer.name}
Idioma: ${this.language}
Plataforma: ${this.platform}
Universo Marvel: ${this.isMCU}
Protagonista: ${this.mainCharacterName}
Productor: ${this.producer.name}
Distribuidora: ${this.distributor}
Género: ${this.genre}`)
	}
}
