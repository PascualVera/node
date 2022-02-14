import * as fs from "fs";

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function readConsole(object) {
  rl.question("Name: ", (name) => {
    object.name = name;
    rl.question("Surname: ", (surname) => {
      object.surname = surname;
      rl.question("Age: ", (age) => {
        object.age = age;

        fs.writeFile("objectRl.json", JSON.stringify(object), () => {
          fs.readFile("objectRl.json", (err, data) => {
            console.log(JSON.parse(data));
            process.exit();
          });
        });
      });
    });
  });
}
