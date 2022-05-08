module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
    }, {});

    Post.associate = (models) => {
        Post.hasMany(models.Comment, {
            foreignKey: 'postId',
            as: 'comments',
            onDelete: 'CASCADE',
        });
    };
    

    return Post;
};