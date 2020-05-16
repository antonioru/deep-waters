import compose from './compose';
import hasProp from './hasProp';
import createValidator from './utils/createValidator';

/**
 * Takes a number and returns a new a function that returns true if the length property of its first parameter
 * (may it be an array or a string) is minor of equals the given number.
 * @param max
 * @param error
 * @returns {function({length: *}): boolean}
 */
const maxLength = (max, error = `The provided value's length bigger than ${max}`) => createValidator(
  compose(hasProp('length'), ({ length }) => length <= max),
  error,
);

export default maxLength;
