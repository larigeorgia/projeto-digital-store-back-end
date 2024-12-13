const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')
const TabelaProdutos = require('../models/TabelaProdutos')

class OpcoesProdutos extends Model {}

OpcoesProdutos.init(
    {
        id: 
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true 
        },
        product_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: TabelaProdutos,
                key:'id'
            }
        },
        title:
            {
                type: DataTypes.STRING(50),
                allowNull: false
            },
        shape: 
            {
                type: DataTypes.ENUM({
                    values: ['square', 'circle'],
                }),
                defaultValue:'square',
                allowNull: true
            },
        radius:
            {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue:0
            },
        type:
            {
                type: DataTypes.ENUM({
                    values: ['text', 'color']
                }),
                defaultValue:'text',
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
        tableName: "opcoes_produto"
    }
)

module.exports = OpcoesProdutos