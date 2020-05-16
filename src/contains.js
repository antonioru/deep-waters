import compose from './compose';
import or from './or';
import when from './when';
import not from './not';
import isString from './isString';
import isPrimitive from './isPrimitive';
import equals from './equals';
import stubFalse from './_internals/stubFalse';


const arrayContains = (value) => (array) => {
  if (isPrimitive(value)) {
    return array.includes(value);
  }

  return array.filter(not(equals(value))).length !== array.length;
};

/**
 * Evaluates whether the specified value equals at least one of the elements of the given list, if the provided
 * list is otherwise a string, makes sure that value it's a sub-string
 */
const contains = (value) => compose(
  when(isString, (string) => string.includes(value)),
  when(Array.isArray, arrayContains(value)),
  when(not(or(isString, Array.isArray)), stubFalse),
);

export default contains;
