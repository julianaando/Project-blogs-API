// middlewares/validateToken.js

const { decodeToken } = require('../auth/validateJWT');

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization.replace(/^Bearer\s+/, '');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = decodeToken(token);
    if (!decoded) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
