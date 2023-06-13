'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        allowNull:false,
        type:Sequelize.INTEGER,
        primaryKey:true,
        foreignKey:true,
        references: {
          model: 'blog_posts',
          key: 'id'
        }
      },
      category_id: {
        allowNull:false,
        type:Sequelize.INTEGER,
        primaryKey:true,
        foreignKey:true,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
