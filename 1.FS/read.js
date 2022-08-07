const fs = require("fs");
fs.writeFileSync(
  "index.html",
  `
<h1>this is my html file</h1>
`
);

fs.appendFileSync("index.html", `<h1>hello world</h1>`);

const buff_read = fs.readFileSync("index.html");
console.log(buff_read);
let org_file = buff_read.toString();
console.log("orginal file :", org_file);

fs.renameSync("index.html", "abdullah.html");
// =>create folder
fs.mkdirSync("abdullah");
// =>create file in folder
fs.writeFileSync("new/new.js", "console.log(`this is new.js`)");
//=>update that file without overiding
fs.appendFileSync(
  "abdullah/abdullah.js",
  `\n const ab='my full name is muhammad abdullah'; \n console.log(ab);`
);
// =>read the content of that file without buffer
const abdullah_file = fs.readFileSync("abdullah/abdullah.js");
const read_abd = abdullah_file.toString();
console.log(read_abd);
// read files in that folder directory
const readDir = fs.readdirSync("abdullah");
console.log(readDir);
// =>delete that file
fs.rmSync("abdullah/abdullah.txt");
fs.mkdirSync("new");
// =>remove that folder along with the files
fs.rmdirSync("new");
// => rename file
fs.renameSync("new/abdullah.js", "welcome.js");
// remove file
fs.rmSync("welcome.js");
// -> remove file from dir
fs.unlinkSync("new/new.js");
// -> romove dir
fs.rmdirSync("new");
