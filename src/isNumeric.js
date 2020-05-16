import compose from './compose';
import isString from './isString';
import matchesPattern from './matchesPattern';
import createValidator from './utils/createValidator';
import isTruthy from './isTruthy';

/**
 * Reports whether the given string is a numeric string
 * @type {function(*=): boolean}
 */
const isNumeric = compose(
  isTruthy,
  isString,
  matchesPattern(/^[-+]?\d*\.?\d*$/),
);

export default createValidator(isNumeric, 'The provided value is not a numeric string');
