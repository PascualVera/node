const fs = require("fs/promises")
let objeto = {
	name: "Pascual",
	surname: "Vera",
	age: 28,
}

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
