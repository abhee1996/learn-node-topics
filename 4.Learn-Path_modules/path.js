const path = require("path");
//-> current dir path
console.log(path.dirname("F:/node cource/node practice/path_modules/path.js"));
console.log(path.extname("F:/node cource/node practice/path_modules/path.js"));
console.log(path.basename("F:/node cource/node practice/path_modules/path.js"));
path.parse("F:/node cource/node practice/path_modules/path.js");

const pathData = path.parse(
  "F:/node cource/node practice/path_modules/path.js"
);
console.log("pathData.name", pathData.name);
console.log("pathData.root", pathData.root);
module.exports = pathData;
