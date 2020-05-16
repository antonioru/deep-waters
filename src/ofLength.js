import compose from './compose';
import hasProp from './hasProp';
import createValidator from './utils/createValidator';

/**
 * Takes a number and returns a new function that returns true if the length property of its first parameter
 * (may it be an array or a string) equals the given number.
 * @param number
 * @param error
 * @returns {function({length: *}): boolean}
 */
const ofLength = (number, error = `The provided value has not length of ${number}`) => createValidator(
  compose(hasProp('length'), ({ length }) => length === number),
  error,
);

export default ofLength;
