("use strict");
/**
 * DROP SCHEMA public CASCADE; CREATE SCHEMA public
 * ^ there's a schema file with all the tables in there. it drops all of that, recreates
 */
const fs = require("fs");
const initialSqlScript = fs.readFileSync("./migrations/sql/Production001.sql", {
  encoding: "utf-8",
});
const db = require("../models");
module.exports = {
  up: () => db.sequelize.query(initialSqlScript),
  down: () =>
    db.sequelize.query(`DROP SCHEMA public CASCADE; CREATE SCHEMA public;
`),
};
// 'use strict';

// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };
