const ForbiddenError = require('../errors/ForbiddenError');
const NotFoundError = require('../errors/NotFoundError');
const Movie = require('../models/movie');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Movie.create({ name, link, owner })
    .then((movie) => Movie.populate(movie, { path: 'owner', select: '-password -__v' }))
    .then((movie) => {
      res.status(201).send({ movie, message: 'Карточка создана' });
    })
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.cardId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Карточка не найдена');
      }
      if (movie.owner._id.toString() !== req.user._id) {
        throw new ForbiddenError('Невозможно удалить карточку другого пользователя');
      }
      return Movie.deleteOne({ _id: req.params.cardId })
        .then(() => { res.send({ data: movie }); });
    })
    .catch(next);
};
