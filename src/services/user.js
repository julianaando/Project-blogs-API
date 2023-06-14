const { User } = require('../models');
const schema = require('./validations');
const { createToken } = require('../auth/validateJWT');

  const createUser = async ({ displayName, email, password, image }) => {
    const error = schema.validateUser({ displayName, email, password });
    if (error.message) return error;

    const user = await User.findOne({ where: { email } });
    if (user) return { type: 409, message: 'User already registered' };

    const newUser = await User.create({ displayName, email, password, image: image || '' });
    const token = createToken({ id: newUser.id });
    return { type: null, message: token };
  };

  module.exports = {
    createUser,
  };
