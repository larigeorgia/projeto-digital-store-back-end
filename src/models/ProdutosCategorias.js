const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')
const TabelaProdutos = require('../models/TabelaProdutos')
const TabelaCategoria = require('../models/TabelaCategoria')

class ProdutosCategorias extends Model {}

ProdutosCategorias.init(
    {
        id: 
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true 
        },
        product_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: TabelaProdutos,
                key:'id'
            }
        },
        category_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: TabelaCategoria,
                key:'id'
            }
        },

    },
    {
        sequelize: database,
        timestamps: false,
        tableName: "produtos_categorias"
    }
)

module.exports = ProdutosCategorias