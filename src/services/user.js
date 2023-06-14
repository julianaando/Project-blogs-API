const { user } = require('../models');
const { createToken } = require('../auth/validateJWT');

const login = async ({ email, password }) => {
  const findUser = await user.findOne({ where: { email } });

  if (!email || !password) {
    return { type: 400, message: 'Some required fields are missing' };
  }

  if (!findUser || password !== findUser.password) {
    return { type: 400, message: 'Invalid fields' };
  }
  const token = createToken({ id: findUser.id });
  return { type: null, message: token };
};
module.exports = {
  login,
};

/*
}; */
