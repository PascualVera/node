import { write } from "./writeJson.js"
import { readConsole } from "./readConsole.js"

let id = {}

async function createId(object, path) {
	await readConsole(object)
	await write(path, object)
}

createId(id, "asyncTest.json")
