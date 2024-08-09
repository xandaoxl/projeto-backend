const Connection = require('../config/Connection')
const { DataTypes, Model } = require('sequelize')
const UserModel = require('./UserModel');

class PostModel extends Model{}

PostModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: UserModel,
                key: 'id'
            },
            allowNull: false
        },
        title: DataTypes.STRING,
        slug: DataTypes.STRING,
        content: DataTypes.TEXT,
        image_path: DataTypes.STRING
    },
    {
        sequelize: Connection,
        tableName: 'posts'
    }
);

module.exports = PostModel