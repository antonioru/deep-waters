import createValidator from './utils/createValidator';
import when from './when';
import isString from './isString';
import ofLength from './ofLength';
import isObject from './isObject';
import isEmptyString from './isEmptyString';
import isSet from './isSet';
import isMap from './isMap';
import or from './or';
import switchCase from './switchCase';

/**
 * Returns true if the given value is empty (can be a string, an array or an object)
 * @type {function(*=): boolean}
 */
const isEmpty = switchCase(
  when(Array.isArray, ofLength(0)),
  when(isString, isEmptyString),
  when(isObject, (object) => isEmpty(Object.keys(object))),
  when(or(isSet, isMap), ({ size }) => size === 0),
);

export default createValidator(isEmpty, 'The provided value is not empty');
