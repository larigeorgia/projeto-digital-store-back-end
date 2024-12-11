const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class OpcoesProdutos extends Model {}

OpcoesProdutos.init(
    {
        title:
            {
                type: DataTypes.STRING(50),
                allowNull: false
            },
        shape: 
            {
                type: DataTypes.ENUM,
                allowNull: true
            },
        radius:
            {
                type: DataTypes.INTEGER,
                allowNull: true
            },
        type:
            {
                type: DataTypes.ENUM,
                allowNull: true
            },
        values:
            {
                type: DataTypes.STRING(100),
                allowNull: false
            }

    },
    {
        sequelize: database,
        timestamps: false,
        tableName: "usuarios"
    }
)

module.exports = OpcoesProdutos