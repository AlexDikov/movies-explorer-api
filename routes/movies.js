const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createMovie,
  deleteMovie,
  getMovies,
} = require('../controllers/movies');
const { regexLink } = require('../utils/constants');

router.get('/', getMovies);

router.delete('/:_id', celebrate({
  params: Joi.object().keys({ _id: Joi.string().hex().length(24).required() }),
}), deleteMovie);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    description: Joi.string().required(),
    movieId: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    image: Joi.string().required().regex(regexLink),
    trailerLink: Joi.string().required().regex(regexLink),
    thumbnail: Joi.string().required().regex(regexLink),
    year: Joi.string().required(),
  }),
}), createMovie);

module.exports = router;
