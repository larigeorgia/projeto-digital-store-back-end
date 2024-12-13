const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class TabelaProdutos extends Model {}

TabelaProdutos.init(
    {
        id: 
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true 
        },
        enabled:
            {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue:0
            },
        name: 
            {
                type: DataTypes.STRING(100),
                allowNull: false
            },
        slug:
            {
                type: DataTypes.STRING(50),
                allowNull: false
            },
        use_in_menu:
            {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue:0
            },
        stock:
            {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue:0
            },
        description:
            {
                type: DataTypes.STRING(200),
                allowNull: true
            },
        price:
            {
                type: DataTypes.FLOAT,
                allowNull: false
            },
        price_with_discount:
            {
                type: DataTypes.FLOAT,
                allowNull: false
            }
    },
    {
        sequelize: database,
        timestamps: true,
        tableName: "produtos"
    }
)

module.exports = TabelaProdutos