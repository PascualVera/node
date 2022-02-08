import * as fs from "fs";

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function readConsole(object, callback) {
  rl.question("Name: ", (name) => {
    object.name = name;
    rl.question("Surname: ", (surname) => {
      object.surname = surname;
      rl.question("Age: ", (age) => {
        object.age = age;
        rl.close();
        callback(object);
      });
    });
  });
}
