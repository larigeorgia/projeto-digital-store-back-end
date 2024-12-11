const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class TabelaCategoria extends Model {}

TabelaCategoria.init(
    {
        id: 
            {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true 
            },
        name: 
            {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
        slug:
            {
                type: DataTypes.STRING(50),
                allowNull: false
            },
        use_in_menu:
            {
                type: DataTypes.BOOLEAN,
                defaultValue: 0,
                allowNull: false,
            }
    },
    {
        sequelize: database,
        timestamps: true,
        tableName: "categorias"
    }
)



module.exports = TabelaCategoria