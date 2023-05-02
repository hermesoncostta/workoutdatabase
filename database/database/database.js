const Sequelize = require("sequelize");

const connection = new Sequelize("workout", "root", "h09m20m21p07", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection;