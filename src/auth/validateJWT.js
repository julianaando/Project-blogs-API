// auth/validateJWT.js

const jwt = require('jsonwebtoken');
const assert = require('assert');

const { JWT_SECRET } = process.env;
assert(JWT_SECRET, 'missing JWT_SECRET environment variable');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (payload) => { 
  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
  return token;
};

const decodeToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};

module.exports = {
  createToken,
  decodeToken,
};