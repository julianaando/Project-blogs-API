const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      }
    },
    categoryId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id',
      }
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories'
  },
);

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: 'PostCategory',
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      through: 'PostCategory',
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return PostCategory;
}

module.exports = PostCategoryModel;