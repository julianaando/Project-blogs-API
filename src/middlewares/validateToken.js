// middlewares/validateToken.js

const { decodeToken } = require('../auth/validateJWT');

const validateToken = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = decodeToken(token);
    if (!decoded) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
