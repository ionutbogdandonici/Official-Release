const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {

    }

    User.init({
        firstName: {
            type: DataTypes.STRING, allowNull: false, validate: {
                notEmpty: true
            }
        }, lastName: {
            type: DataTypes.STRING, allowNull: false, validate: {
                notEmpty: true
            }
        }, imageProfile: {
            type: DataTypes.STRING, allowNull: true
        }, email: {
            type: DataTypes.STRING, allowNull: false, validate: {
                notEmpty: true, isEmail: true
            }
        }, password: {
            type: DataTypes.STRING, allowNull: false, validate: {
                notEmpty: true
            }
        }, isAdmin: {
            type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
        }, isAbled: {
            type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true
        }
    }, {
        sequelize, modelName: 'User', tableName: 'users',
    });

    return User;
}