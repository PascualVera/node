let objectfs = {
  name: "Pascual",
  surname: "Vera",
  age: 28,
};
const fs = require("fs");
fs.writeFile("objectFS.json", JSON.stringify(objectfs), () => {
  fs.readFile("objectFS.json", (err, data) => {
    console.log(JSON.parse(data));
  });
});
