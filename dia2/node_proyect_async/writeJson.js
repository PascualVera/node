import * as fs from "fs/promises"

export const write = async (path, object) => {
	await fs.writeFile(path, JSON.stringify(object))

	const data = await fs.readFile(path, "utf8")

	console.log(JSON.parse(data))
}
 