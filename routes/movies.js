const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createMovie,
  deleteMovie,
  getMovies,
} = require('../controllers/movies');
const { regexLink } = require('../utils/constants');

router.get('/', getMovies);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({ movieId: Joi.string().hex().length(24).required() }),
}), deleteMovie);

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(regexLink),
  }),
}), createMovie);

module.exports = router;
