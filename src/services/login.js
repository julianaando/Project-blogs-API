// services/login.js

const { User } = require('../models');
const { createToken } = require('../auth/validateJWT');

const login = async ({ email, password }) => {
  if (!email || !password) {
    return { type: 400, message: 'Some required fields are missing' };
  }

  const foundUser = await User.findOne({ where: { email, password } });

  if (!foundUser) {
    return { type: 400, message: 'Invalid fields' };
  }
  const token = createToken({ email: foundUser.email });
  return { type: null, message: token };
};

module.exports = {
  login,
};

/*
}; */
