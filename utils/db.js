const Sequelize = require("sequelize")

const dbConfig = require("../config/config.json")

const db = new Sequelize(dbConfig.development)

module.exports = db