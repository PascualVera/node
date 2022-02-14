const fs = require("fs");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let objectRl = {
  name: "",
  surname: "",
  age: "",
};

rl.question("Name: ", (name) => {
  objectRl.name = name;
  rl.question("Surname: ", (surname) => {
    objectRl.surname = surname;
    rl.question("Age: ", (age) => {
      objectRl.age = age;

      fs.writeFile("objectRl.json", JSON.stringify(objectRl), () => {
        fs.readFile("objectRl.json", (err, data) => {
          console.log(JSON.parse(data));
          process.exit();
        });
      });
    });
  });
});
