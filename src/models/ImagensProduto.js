const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')
const TabelaProdutos = require('../models/TabelaProdutos')

class ImagensProduto extends Model {}

ImagensProduto.init(
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
        enabled:
            {
                type: DataTypes.BOOLEAN,
                defaultValue:0
            },
        path:
            {
                type: DataTypes.STRING(50),
                allowNull: false,
            }
    },
    {
        sequelize: database,
        timestamps: false,
        tableName: "imagens_produto"
    }
)

module.exports = ImagensProduto