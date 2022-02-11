class Professional {
	constructor() {
		this.name = ""
		this.ag = ""
		this.genre = ""
		this.weight = ""
		this.height = ""
		this.hairColor
		this.race = ""
		this.isRetired
		this.nationality
		this.oscarsNumber
		this.profesion
		this.foto
	}

	printAll() {
		console.log(
			"Name: " +
				this.name +
				"\n Genre: " +
				this.genre +
				"\n Weigth: " +
				this.weight +
				"\n Height: " +
				this.height +
				"\n Hair color: " +
				this.hairColor +
				"\n Race: " +
				this.race +
				"\n Is retired?: " +
				this.isRetired +
				"\n Nationality: " +
				this.nationality +
				"\n Number of Oscars: " +
				this.oscarsNumber +
				" \n Profession: " +
				this.profesion
		)
	}
}

module.exports = {
	Professional,
}
