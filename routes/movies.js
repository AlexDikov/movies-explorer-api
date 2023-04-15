const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createCard,
  getCards,
  deleteCard,
} = require('../controllers/movies');
const { regexLink } = require('../utils/constants');

router.get('/', getCards);

router.delete('/:cardId', celebrate({
  params: Joi.object().keys({ cardId: Joi.string().hex().length(24).required() }),
}), deleteCard);

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(regexLink),
  }),
}), createCard);

module.exports = router;
