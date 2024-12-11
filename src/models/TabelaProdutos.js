const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class TabelaProdutos extends Model {}

TabelaProdutos.init(
    {
        enabled:
            {
                type: DataTypes.BOOLEAN,
                allowNull: true
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
                allowNull: false
            },
        stock:
            {
                type: DataTypes.INTEGER,
                allowNull: true
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