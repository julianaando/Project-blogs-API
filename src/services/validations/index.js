const { userSchema, blogSchema } = require('./schemas');

const validateUser = (user) => {
  const { error } = userSchema.validate(user);

  if (error) return { type: 400, message: error.message };

  return { type: null, message: null };
};

const validateBlogPost = (post) => {
  const { error } = blogSchema.validate(post);

  if (error) return { type: 400, message: error.message };

  return { type: null, message: null };
};

module.exports = {
  validateUser,
  validateBlogPost,
};
