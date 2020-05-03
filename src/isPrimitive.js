import or from './or';
import isBigInt from './isBigInt';
import isString from './isString';
import isFunction from './isFunction';
import isBoolean from './isBoolean';
import isNumber from './isNumber';
import isSymbol from './isSymbol';
import isUndefined from './isUndefined';
import isNull from './isNull';

const isPrimitive = or(isString, isFunction, isBoolean, isNumber, isBigInt, isSymbol, isNull, isUndefined);

export default isPrimitive;
