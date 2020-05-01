import compose from './compose';
import when from './when';
import or from './or';
import isString from './isString';
import isBoolean from './isBoolean';
import isNumber from './isNumber';
import isFunction from './isFunction';
import isObject from './isObject';
import isRegExp from './isRegExp';
import isDate from './isDate';
import every from './every';


const objectEquals = (object) => (value) => {
  const objKeys = Object.keys(object);
  const valueKeys = Object.keys(value);

  if (objKeys.length !== valueKeys.length) return false;

  // eslint-disable-next-line no-use-before-define
  return valueKeys.every((key, index) => equals(key)(objKeys[index]));
};


// eslint-disable-next-line no-use-before-define
const arrayEquals = (array) => every((item, index) => equals(item)(array[index]));

const equals = (value) => compose(
  when(or(isString, isBoolean, isNumber, isFunction, isRegExp), (string) => value === string),
  when(isDate, () => !!value.valueOf(), (date) => date.valueOf() === value.valueOf()),
  when(Array.isArray, arrayEquals(value)),
  when(isObject, objectEquals(value)),
);

export default equals;
