const { Sequelize } = require("sequelize");

const seq = new Sequelize("test_fullstack", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = seq;
