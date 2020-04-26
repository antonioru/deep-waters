import compose from './compose';
import hasProp from './hasProp';

/**
 * Takes number and returns a function that returns true if the length property of its first parameter
 * (may it be an array or a string) equals the given number.
 * @param number
 * @returns {function({length: *}): boolean}
 */
const ofLength = (number) => compose(
  hasProp('length'),
  ({ length }) => length === number,
);

export default ofLength;
