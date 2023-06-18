const { BlogPost, PostCategory } = require('../models');
const schema = require('./validations');

const createPost = async ({ title, content, userId, categoryIds }) => {
  const error = schema.validateBlogPost({ title, content });
  if (error.message) return error;

  const newPost = await BlogPost.create({
    title,
    content,
    userId,
  });

  categoryIds.map(async (id) => {
    await PostCategory.create({ postId: newPost.id, categoryId: id });
  });
  return newPost;
};

module.exports = {
  createPost,
};