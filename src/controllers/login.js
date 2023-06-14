const { userService } = require('../services');

const login = async (req, res) => {
  const { type, message } = await userService.login(req.body);
  if (type) return res.status(type).json({ message });

  res.status(200).json({ token: message });
};

module.exports = { login };