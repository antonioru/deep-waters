import createValidator from './utils/createValidator';
import compose from './compose';
import isString from './isString';

/**
 * Takes a value and returns true only if it's of type `string` and it's empty
 * @type {function(*=): boolean}
 */
const isEmptyString = compose(
  isString,
  (str) => str.trim() === '',
);


export default createValidator(isEmptyString, 'The provided value is not an empty string');
