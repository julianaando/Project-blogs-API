const { postService } = require('../services');

const createPost = async (req, res) => {
  const { type, message } = await postService.createPost(req.body, req.headers.authorization);
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

module.exports = {
  createPost,
};