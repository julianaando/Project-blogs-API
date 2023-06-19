const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(6).required(),
});

const blogSchema = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array().items(Joi.number().integer().positive().required()
.messages({
    'array.includesRequiredUnknowns': 'one or more "categoryIds" not found',
    'array.min': 'one or more "categoryIds" not found',
  })),
}).messages({
    'string.empty': 'Some required fields are missing',
  });

module.exports = {
  userSchema,
  blogSchema,
};