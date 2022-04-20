module.exports = (sequelize, DataType) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataType.STRING,
            allowNull: false,
        },
        likes: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        userId: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        postId: {
            type: DataType.INTEGER,
            allowNull: false,
        },
    })

    return Comment
}