const database = require('../config/database')

const { DataTypes } = require("sequelize")

const Categorias = database.define(
    "Categoria", 
    {
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
            }
    }
)

module.exports = Categorias