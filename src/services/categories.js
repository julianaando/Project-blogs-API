const { Category } = require('../models');

const createCategory = async ({ name }) => {
  if (!name) return { type: 400, message: '"name" is required' };
  const category = await Category.create({ name });
  return { type: null, message: category };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};