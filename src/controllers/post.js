const { postService, userService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const user = await userService.getUserByEmail(req.user.email);
  const post = await postService.createPost({ title, content, categoryIds, userId: user.id });
  if (post.type) return res.status(post.type).json({ message: post.message });
  res.status(201).json(post);
};

// const getAllPosts = async (_req, res) => {
//   const posts = await postService.getAllPosts();
//   res.status(200).json(posts);
// };

// const getPostById = async (req, res) => {
//   const { id } = req.params;
//   const post = await postService.getPostById(id);
//   if (post.type) return res.status(post.type).json({ message: post.message });
//   res.status(200).json(post);
// };

module.exports = {
  createPost,
  // getAllPosts,
  // getPostById,
};