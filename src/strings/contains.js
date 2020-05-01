import compose from '../compose';
import isString from './isString';

/**
 * Check whether the given string contains the defined prop
 * @param prop
 * @returns {function(*=): boolean}
 */
const contains = (prop) => compose(
  isString,
  (value) => value.indexOf(`${prop}`) >= 0,
);

export default contains;
