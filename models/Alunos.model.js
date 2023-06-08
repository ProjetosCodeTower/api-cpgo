const db = require("../utils/db")

const {DataTypes} = require("sequelize")

const Alunos = db.define("alunos", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matricula: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nota: DataTypes.FLOAT
})

module.exports = Alunos