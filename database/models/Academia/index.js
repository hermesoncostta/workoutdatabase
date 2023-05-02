const Sequelize = require("sequelize");
const connection = require("../../database/database");


const Academia = connection.define("academia", {
    academia_name: {
        type: Sequelize.STRING,
    }
});

Academia.sync({ force: false});

module.exports = Academia;