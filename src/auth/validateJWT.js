// auth/validateJWT.js

const jwt = require('jsonwebtoken');
const assert = require('assert');

const SECRET = process.env.JWT_SECRET;

assert(SECRET, 'missingSECRET environment variable');

const createToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '7d' });

const decodeToken = (token) => jwt.verify(token, SECRET);

module.exports = {
  createToken,
  decodeToken,
};