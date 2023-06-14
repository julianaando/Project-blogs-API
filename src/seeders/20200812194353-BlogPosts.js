module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('blog_posts',
      [
        {
          id: 1,
          title: 'Post do Ano',
          content: 'Melhor post do ano',
          user_id: 1,
          published: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          id: 2,
          title: 'Vamos que vamos',
          content: 'Foguete não tem ré',
          user_id: 1,
          published: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('blog_posts', null, {});
  },
};
