const fs = require("fs");
//create dir async
// fs.mkdir("hello", (err, path) => {
//   console.log("err", err);
//   console.log("path", path);
// });
// fs.writeFile("hello/async.js", "this is file for async code", (err) => {
//   console.log("err", err);
// });
// fs.appendFile("hello/async.js", "`this is file for asyncfrf code`", (err) => {
//   console.log("err", err);
// });

//ASYNCRONOUS DATA:::::
// const data = fs.readFile("hello/async.js", "UTF-8", (err, dat) => {
//   console.log("ASYNCRONOUS data TWO: ", dat);
//   console.log("Asyncronous data TWO");

//   console.log(err);
// });
// //   console.log("data", data.toString());
// console.log("ASYNCRONOUS data ONE: ", data);
// console.log("Asyncronous data ONE");

//SYNCRONOUS DATA:::::
// const data = fs.readFileSync("hello/async.js", "UTF-8");

// console.log("Syncronous data TWO", data);
// // console.log("err TWO", err);
// console.log("Syncronous data TWO");
