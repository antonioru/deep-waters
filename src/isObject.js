import when from './when';
import compose from './compose';
import isNull from './isNull';
import stubFalse from './utils/stubFalse';

/**
 * Returns true if (and only) the given value is a valid object
 * @type {function(*=): boolean}
 */
const isObject = compose(
  when(isNull, stubFalse),
  (value) => typeof value === 'object' && value.constructor === Object,
);

export default isObject;
