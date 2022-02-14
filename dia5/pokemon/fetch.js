let input = document.getElementById("input")
let boton = document.getElementById("boton")
let pokemonData = document.querySelector(".pokemon_data")

boton.addEventListener("click", async () => {
	let url = `https://pokeapi.co/api/v2/pokemon/${input.value}`
	let param = {
		headers: {
			"content-type": "application/json; charset=UTF-8",
		},
		method: "GET",
	}

	try {
		let data = await fetch(url, param)
		let result = await data.json()

		pokemonData.innerHTML = showData(result)
	} catch (error) {
		console.log(error)
	}
})

const showData = (pokemon) => {
	let post = `<div class= pokemon>
	<div class=pokemon_header>
  <div class=pokemon_info>
	<figure class=img_container>
	<img class=img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
		pokemon.id
	}.png>
	</figure><div>
	<p><strong>Name: </strong> ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p> 
	<p><strong>Pokédex Number: </strong> ${pokemon.id}</p>
	<p><strong>Type:  </strong>${getType(pokemon)} </p>
	<p><strong>Ability: </strong> ${getAbilities(pokemon)} </p>
	</div>
	</div>
	</div>
	<main class=gameplay_info>
	<article class=stats><h3>Stats</h3>${getStats(pokemon)}</article>
	<article class=moveset><h3>MoveSet</h3>${getMoveSet(pokemon)}</article>
	
	</main>
	
	</div>
	`
	return post
}

const getAbilities = (pokemon) => {
	let post = ""
	for (const item of pokemon.abilities) {
		if (item.is_hidden == true) {
			post += `<strong>Hidden ability: </strong> ${item.ability.name}`
		} else {
			post += `${item.ability.name} `
		}
	}
	return post
}

const getType = (pokemon) => {
	let post = ""
	for (const item of pokemon.types) {
		post += `${item.type.name} `
	}
	return post
}

const getMoveSet = (pokemon) => {
	let post = ""
	for (const item of pokemon.moves) {
		post += `<span><p>Name:</p><p> ${item.move.name}</p></span> `
	}
	return post
}
const getStats = (pokemon) => {
	let post = ""
	for (const item of pokemon.stats) {
		post += `<span class=stat><p>Stat: ${item.stat.name}</p><p> Value: ${item.base_stat}</p></span>`
	}
	return post
}
