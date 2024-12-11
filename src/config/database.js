// require("dotenv").config({path:'../../.env'}) - teste de caminho erro no dialect 

const { Sequelize } = require('sequelize')


const database = new Sequelize( {
    dialect: 'mysql',
    database: "db_digital_store",
    // database: process.env.DB_DATABASE,
    host: "localhost",
    // host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    // port: process.env.DB_PORT,
    username: "root",
    // username: process.env.DB_USERNAME,
    password: "root"
    // password: process.env.DB_PASSWORD
})


module.exports = database

//para definir tabelas
// database.define("Teste", {
//     name: DataTypes.STRING
// })
//o define recebe tres parametros, o ultimo deles e opcional e pode-se determinar o nome exato da tabela {tableName: "Teste"}

// database.sync()
//{alter:true}{force:true}; a primeira so faz alteracoes e a segunda apaga a tabela e cria uma nova