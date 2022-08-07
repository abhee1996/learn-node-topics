// // const mysql = require("mysql");
// // const mysql2 = require("mysql2");
// const mariadb = require("mariadb");
// //Connect with mysql
// // const connDb = mysql2.createConnection({
// //   host: "localhost",
// //   //   host: "127.0.0.1",
// //   //   port: 3307,
// //   user: "root",
// //   password: "root@1",
// //   //   database: "node_express_app",
// // });

// let mydb = `nodeJs_app`;

// const pool = mariadb.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   port: process.env.Port || 3307,
//   user: process.env.DB_USER || "root",
//   password: process.env.Password || "root",
//   allowPublicKeyRetrieval: true,
// });
// pool
//   .then(async (conn) => {
//     conn
//       .query(`CREATE DATABASE IF NOT EXISTS ${mydb}`)
//       .then((rows) => {
//         console.log(rows);
//         conn.end();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     return conn;
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// // const pool = mariadb.createConnection({
// //   host: process.env.DB_HOST || "localhost",
// //   port: process.env.Port || 3307,
// //   user: process.env.DB_USER || "root",
// //   password: process.env.Password || "root",
// //   allowPublicKeyRetrieval: true,
// // });
// // pool
// //   .then(async (conn) => {
// //     conn
// //       .query(`CREATE DATABASE IF NOT EXISTS ${mydb}`)
// //       .then((rows) => {
// //         console.log(rows);
// //         conn.end();
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //     return conn;
// //   })
// //   .catch((err) => {
// //     console.log("err", err);
// //   });

// // console.log("connDb", connDb);
// module.exports = { pool };
