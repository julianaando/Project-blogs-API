const { decodeToken } = require('../auth/validateJWT');
const { BlogPost, PostCategory, Category } = require('../models');

const createPost = async ({ title, content, categoryIds }, token) => {
  const categories = await Category.findAll();
  const categoryIdsFromDb = categories.map((c) => c.id); //
  if (categoryIds.some((id) => !categoryIdsFromDb.includes(id))) {
    return { type: 400, message: 'one or more "categoryIds" not found' };
  }
  const { id: userId } = decodeToken(token);
  const post = await BlogPost.create({ 
    title,
    content,
    categoryIds,
    userId,
    published: new Date(),
    updated: new Date(),
  });
  categoryIds.map(async (id) => PostCategory.create( 
    { postId: post.id, categoryId: id },
  ));
    return { type: null, message: post };
};

module.exports = {
  createPost,
};