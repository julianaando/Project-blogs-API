// services/user.js

const { User } = require('../models');
const schema = require('./validations');
const { createToken } = require('../auth/validateJWT');

  const createUser = async ({ displayName, email, password, image }) => {
    const error = schema.validateUser({ displayName, email, password });
    if (error.message) return error;

    const user = await User.findOne({ where: { email } });
    if (user) return { type: 409, message: 'User already registered' };

    const newUser = await User.create({ displayName, email, password, image: image || '' });
    const token = createToken({ email: newUser.email });
    return { type: null, message: token };
  };

  const getAllUsers = async () => {
    const users = await User.findAll();
    const usersWithoutPassword = users.map((user) => {
      const { password, ...userWithoutPassword } = user.toJSON();
      return userWithoutPassword; // retorna cada usuário sem a senha
    });
    return usersWithoutPassword; // retorna todos os usuários sem a senha
  };

  module.exports = {
    createUser,
    getAllUsers,
  };
