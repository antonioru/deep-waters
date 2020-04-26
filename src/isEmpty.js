import compose from './compose';
import when from './when';
import isString from './isString';
import ofLength from './ofLength';
import isObject from './isObject';

/**
 * Returns true if the given value is empty (can be a string, an array or an object)
 * @type {function(*=): boolean}
 */
const isEmpty = compose(
  when(Array.isArray, ofLength(0)),
  when(isString, (string) => string.trim() === ''),
  when(isObject, (value) => isEmpty(Object.keys(value))),
);

export default isEmpty;
