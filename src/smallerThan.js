import compose from './compose';
import isNumber from './isNumber';

/**
 * Takes a number N and return a new function that evaluates whether the received value is of type number and it's
 * smaller than N (the one previously defined). The evaluation is not inclusive.
 * @param number
 * @returns {function(*=): boolean}
 */
const smallerThan = (number) => compose(
  isNumber,
  (value) => value < number,
);

export default smallerThan;
