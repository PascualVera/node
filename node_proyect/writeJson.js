import * as fs from "fs/promises"

export const write = (path, object) => {
	const promise = new Promise((resolve, reject) => {
		fs.writeFile(path, JSON.stringify(object))
			.then(() => {
				return fs.readFile(path, "utf8")
			})
			.then((data) => {
				resolve(console.log(JSON.parse(data)))
			})
			.catch((err) => {
				reject(err)
			})
	})
	return promise
}
