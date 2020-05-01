import or from './or';
import isFalse from './isFalse';
import isZero from './numbers/isZero';
import isNull from './isNull';
import isUndefined from './isUndefined';
import isEmptyString from './strings/isEmptyString';

/**
 * Returns true if the given value is falsy (false, zero, empty string, null, undefined or NaN)
 * @type {function(*=): *|boolean}
 */
const isFalsy = or(isFalse, isZero, isEmptyString, isNull, isUndefined, (value) => !value);

export default isFalsy;
