import compose from './compose';
import isNumber from './isNumber';
import createValidator from './utils/createValidator';

/**
 * Takes a number N and return a new function that evaluates whether the received value is of type number and it's
 * smaller than N (the one previously defined). The evaluation is not inclusive.
 */
const smallerThan = (number, error = `The provided value is not smaller than ${number}`) => createValidator(
  compose(isNumber, (value) => value < number),
  error,
);

export default smallerThan;
