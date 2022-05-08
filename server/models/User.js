const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {}

    User.init(
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            imageProfile: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }
    );

    User.associate = (models) => {
        User.hasMany(models.Post, {
            foreignKey: "userId",
            as: "posts",
            onDelete: "CASCADE",
        });
    };

    return User;
};
