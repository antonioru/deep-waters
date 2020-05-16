import or from './or';
import isString from './isString';
import isBigInt from './isBigInt';
import isBoolean from './isBoolean';
import isNumber from './isNumber';
import isSymbol from './isSymbol';
import isUndefined from './isUndefined';
import createValidator from './utils/createValidator';

/**
 * Receives a value and reports whether it is a primitive of not
 * @type {function(*=): boolean}
 */
const isPrimitive = or(isString, isNumber, isBigInt, isBoolean, isUndefined, isSymbol);

export default createValidator(isPrimitive, 'The provided value is not a primitive');
