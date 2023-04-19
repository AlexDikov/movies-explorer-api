const SERVER_ERROR = 500;
const serverErrorMessage = 'на сервере произошла ошибка';

const NOT_FOUND = 404;
const unexistingPageErrorMessage = 'Страница не существует';
const invalidIdError = 'Нет пользователя с таким id';
const invalidDataError = 'Ошибка ввода';
const unexistingCardError = 'Карточка не найдена';

const BAD_REQUEST = 400;
const badRequesErrortMessage = 'на сервере произошла ошибка';

const UNAUTHORIZED = 401;
const invalidDataErrorMessage = 'Неправильные почта или пароль';
const unauthorizedUserErrorMessage = 'Пользователь не авторизован';

const CONFLICT = 409;
const conflictErrorMessage = 'Пользователь с таким email уже зарегистрирован';

const forbiddenErrorMessage = 'Невозможно удалить карточку другого пользователя';

const regexLink = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/;

module.exports = {
  SERVER_ERROR,
  NOT_FOUND,
  BAD_REQUEST,
  UNAUTHORIZED,
  CONFLICT,
  regexLink,
  serverErrorMessage,
  unexistingPageErrorMessage,
  badRequesErrortMessage,
  invalidDataErrorMessage,
  conflictErrorMessage,
  invalidIdError,
  invalidDataError,
  unexistingCardError,
  forbiddenErrorMessage,
  unauthorizedUserErrorMessage,
};
