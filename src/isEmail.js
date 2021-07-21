import compose from './compose';
import isString from './isString';
import matchesPattern from './matchesPattern';

// https://www.regular-expressions.info/email.html
const isEmail = compose(
  isString,
  matchesPattern(/^[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/),
);

export default isEmail;
