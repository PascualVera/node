import { write } from "./writeJson.js"
import { readConsole } from "./readConsole.js"

let id = {}
 
readConsole(id).then(() => {
	write("id.json", id)
})
