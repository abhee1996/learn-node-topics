const fs = require("fs");
fs.writeFileSync("read.txt", "wirte redafdjaf fv"); //create a new file
fs.writeFileSync("read.txt", "this is my new read read.txt file"); //create a new file

fs.appendFileSync("read.txt", "\n add new text in read.txt file");

const buf_data = fs.readFileSync("read.txt");
fs.appendFileSync(
  "read.txt",
  "\n buffer mainly used to store binary data while reading from a file or receiving packets over the network.\nIt's an additional data type called buffer(not available in browser's javascript)\n"
);
let org_data = buf_data.toString();
console.log(org_data);
fs.renameSync("read.txt", "readwrite.txt");
