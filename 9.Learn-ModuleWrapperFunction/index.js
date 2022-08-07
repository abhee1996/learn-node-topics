// In nodejs,the code looks like following we write:
const fs = require("fs");
const myName = "abdullah";
console.log(myName);
// but behind of it in NodeJs it converted into

(function (exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
  const fs = require("fs"); //actually require is comes like this way

  const myName = "abdullah";
  console.log(myName);
  module.exports = { myName };
});
//Immidiately Invoked Function Expression
(function () {
  const myName = "abdullah";
  console.log(myName);
})();
