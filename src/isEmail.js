import compose from './compose';
import isString from './isString';
import matchesPattern from './matchesPattern';
import createValidator from './utils/createValidator';

// eslint-disable-next-line max-len
const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmail = compose(
  isString,
  matchesPattern(emailRE),
);

export default createValidator(isEmail, 'The provided value is not an email');
