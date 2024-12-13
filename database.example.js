const { Sequelize } = require('sequelize')


const database = new Sequelize( {
    dialect: '',
    database:'',
    port:'' ,
    username: '',
    password: ''
})


module.exports = database
