const Sequelize = require("sequelize");
const connection = require("../../database/database");


const Aluno = connection.define("aluno", {
    aluno_nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    aluno_email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    aluno_cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    aluno_endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    aluno_telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    aluno_sexo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "M",
    },
    aluno_data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
    aluno_data_cadastro: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
    aluno_cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    aluno_estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    aluno_descricao: {
        type: Sequelize.STRING,

    },
    aluno_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "A",
    },
    aluno_senha: {
        type: Sequelize.STRING,
    }


})


Aluno.sync({ force: false });

module.exports = Aluno;