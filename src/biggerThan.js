import compose from './compose';
import isNumber from './isNumber';
import createValidator from './utils/createValidator';

/**
 * Evaluates whether the received value is a number bigger than the defined one
 * @param number
 * @param error
 * @returns {function(*=): boolean}
 */
const biggerThan = (number, error = `The provided value is not bigger than ${number}`) => createValidator(
  compose(isNumber, (value) => value > number),
  error,
);

export default biggerThan;
