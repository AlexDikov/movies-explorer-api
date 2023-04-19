const router = require('express').Router();
const {
  modifyUser,
  getUser,
} = require('../controllers/users');
const { modifyUserValidator } = require('../middlewares/validators/users');

router.get('/me', getUser);

router.patch('/me', modifyUserValidator, modifyUser);

module.exports = router;
