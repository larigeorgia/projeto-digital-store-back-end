const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class AdminModel extends Model {}

AdminModel.init(
    {
        id: 
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true 
        },
        email:
            {
                type: DataTypes.STRING(50),
                allowNull: false
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
        tableName: "admin"
    }
)



module.exports = AdminModel