import compose from './compose';
import when from './when';
import or from './or';
import isObject from './isObject';
import isDate from './isDate';
import every from './every';
import isPrimitive from './isPrimitive';


const objectEquals = (object) => (value) => {
  if (!isObject(object)) return false;

  const objKeys = Object.keys(object);
  const valueKeys = Object.keys(value);

  if (objKeys.length !== valueKeys.length) return false;

  // eslint-disable-next-line no-use-before-define
  return valueKeys.every((key) => equals(value[key])(object[key]));
};


// eslint-disable-next-line no-use-before-define
const arrayEquals = (array) => every((item, index) => equals(item)(array[index]));

/**
 * Takes a value val, of any type, and returns a new function evaluating that the received value equals val
 * (the one previously defined).
 * @param value
 * @returns {function(*=): boolean}
 */
const equals = (value) => compose(
  when(or(isPrimitive), (string) => value === string),
  when(isDate, () => !!value.valueOf(), (date) => date.valueOf() === value.valueOf()),
  when(Array.isArray, arrayEquals(value)),
  when(isObject, objectEquals(value)),
);

export default equals;
