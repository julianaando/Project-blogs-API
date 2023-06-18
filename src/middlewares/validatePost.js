const { PostCategory } = require('../models');

const checkFieldsRequired = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categoryExists = await PostCategory.findOne({ where: { id: categoryIds } });
  if (categoryExists.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
    next();
};

module.exports = {
  checkFieldsRequired,
};