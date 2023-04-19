const router = require('express').Router();
const {
  createMovie,
  deleteMovie,
  getMovies,
} = require('../controllers/movies');
const { createMovieValidator, deleteMovieValidator } = require('../middlewares/validators/models');

router.get('/', getMovies);

router.delete('/:_id', deleteMovieValidator, deleteMovie);

router.post('/', createMovieValidator, createMovie);

module.exports = router;
