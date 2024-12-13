require("dotenv").config({path:'../../.env'}) 

const { Sequelize } = require('sequelize')


const database = new Sequelize( {
    dialect: 'mysql',
    database: 'db_digital_store',
    port: 3306,
    username: 'root',
    password: 'root'
})


module.exports = database
