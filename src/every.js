import compose from './compose';
import isFunction from './isFunction';

/**
 * Makes sure that every item of the array is valid for the received validator
 * @param validator
 * @returns {function(*): *}
 */
const every = (validator) => compose(
  (value) => (isFunction(validator) ? value : false),
  Array.isArray,
  (items) => items.every(validator),
);

export default every;
