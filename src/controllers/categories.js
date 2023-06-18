const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { type, message } = await categoriesService.createCategory(req.body);
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

module.exports = {
  createCategory,
};