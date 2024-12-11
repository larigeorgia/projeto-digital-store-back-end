const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class ImagensProduto extends Model {}

ImagensProduto.init(
    {
        enable:
            {
                type: DataTypes.BOOLEAN,
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