const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class TabelaUsuarios extends Model {}

TabelaUsuarios.init(
    {
        id: 
            {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true 
            },
        firstname:
            {
                type: DataTypes.STRING(100),
                allowNull: false
            },
        surname: 
            {
                type: DataTypes.STRING(100),
                allowNull: false
            },
        email:
            {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true
            },
        password:
            {
                type: DataTypes.STRING(50),
                allowNull: false
            }
    },
    {
        sequelize: database,
        timestamps: true,
        tableName: "usuarios"
    }
)

// database.sync()

module.exports = TabelaUsuarios