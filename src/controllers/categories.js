const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { type, message } = await categoriesService.createCategory(req.body);
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

const getAllCategories = async (_req, res) => {
  const { type, message } = await categoriesService.getAllCategories();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

module.exports = {
  createCategory,
  getAllCategories,
};