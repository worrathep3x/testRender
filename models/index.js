const { DB, USER, PASSWORD, HOST, PORT, dialect, pool,dialectOptions } = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: dialect,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
  dialectOptions: dialectOptions
});

const db = {
  Sequelize,
  sequelize,
  persons: require("./Person.model.js")(sequelize, Sequelize),
  products: require("./product.model.js")(sequelize, Sequelize),
};

module.exports = db;
