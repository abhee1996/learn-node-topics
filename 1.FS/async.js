// "this is file for async code";
// `this is file for asyncfrf code`;

//  // // // // // // /// // //////
//                               //
//  CHALLENGE CRUD WITH ASYNC fs //
//                               //
// // // // // // // // // // // //
const fs = require("fs");
//-> mkdir
// fs.mkdir("Async", (err) => {
//   console.log(err);
// });

//->make file and add text in it

// fs.writeFile("Async/aysnc.js", "my async file", (err) => {
//   console.log(err);
// });
//-> update new text
// fs.appendFile("Async/async.js", "\n`new wonderfull text world`", (err) => {
//   console.log(err);
// });
// ->read text
// const readAsy = fs.readFile("Async/async.js", "utf-8", (err, data) => {
//   console.log(err), console.log(data);
// });
// console.log(readAsy);

//-> delete file and then dir
//use rm() to remove file
// fs.rm("hello/new.txt", (err) => {
//   console.log(err);
// });
//use unlink() to remove file
// fs.unlink("hello/hell.txt", (err) => {
//   console.log(err);
// });
//del folder
// fs.rmdir("hello", (err) => {
//   console.log(err);
// });
//  // // // // // // /// // //////
//      CHALLENGE COMPLETED      //
//      CRUD WITH ASYNC fs       //
//                               //
// // // // // // // // // // // //
