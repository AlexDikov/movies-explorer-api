const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { unauthorizedUserErrorMessage } = require('../utils/constants');
require('dotenv').config();

const secretKey = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'some-secret-key';

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError(unauthorizedUserErrorMessage));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, secretKey);
  } catch (e) {
    const err = new UnauthorizedError(unauthorizedUserErrorMessage);

    return next(err);
  }
  req.user = payload;
  return next();
};
