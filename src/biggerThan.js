import compose from './compose';
import isNumber from './isNumber';

/**
 * Evaluates whether the received value is a number bigger than the defined one
 * @param number
 * @returns {function(*=): boolean}
 */
const biggerThan = (number) => compose(
  isNumber,
  (value) => value > number,
);

export default biggerThan;
