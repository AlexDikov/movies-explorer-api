require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/NotFoundError');
const { createUserValidator, loginValidator } = require('./middlewares/validators/authorization');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { unexistingPageErrorMessage } = require('./utils/constants');
const errorHandler = require('./middlewares/errorHandler');

const { PORT = 3000 } = process.env;

const app = express();

app.use(helmet);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.ADRESS : 'mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(cors());

app.use(requestLogger);

app.use('/users', auth, require('./routes/users'));
app.use('/movies', auth, require('./routes/movies'));

app.post('/signin', loginValidator, login);

app.post('/signup', createUserValidator, createUser);

app.use(auth, (req, res, next) => {
  next(new NotFoundError(unexistingPageErrorMessage));
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
});
