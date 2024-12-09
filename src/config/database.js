const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: "mysql",
    database: "",
    host: "localhost",
    port:3306,
    username: "root",
    password: "root"
})


module.exports = sequelize
