import * as fs from "fs";
function writeAndRead(object) {
  fs.writeFile("objectFS.json", JSON.stringify(object), () => {
    fs.readFile("objectFS.json", (err, data) => {
      console.log(JSON.parse(data));
    });
  });
}

export { writeAndRead };
