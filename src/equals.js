import createValidator from './utils/createValidator';

/**
 * Internal comparison function
 * @param object
 * @returns {function(...[*]=)}
 */
const deepEquals = (object) => (value) => {
  if (object === value) return true;

  // handles NaN comparison
  if (Number.isNaN(object) && Number.isNaN(value)) return true;

  if (object && value && typeof object === 'object' && typeof value === 'object') {
    // if instances of two different constructors return false
    if (object.constructor !== value.constructor) return false;

    // if instances of regex compare the source
    if (object.constructor === RegExp) return object.source === value.source && object.flags === value.flags;

    // handle array comparison
    if (Array.isArray(object)) {
      if (object.length !== value.length) return false;

      for (let index = 0; index < object.length; index += 1) {
        if (!deepEquals(object[index])(value[index])) {
          return false;
        }
      }

      return true;
    }

    // handle Map comparison
    if ((object instanceof Map)) {
      if (object.size !== value.size) return false;

      // eslint-disable-next-line no-restricted-syntax
      for (const [key, mapValue] of object.entries()) {
        if (!value.has(key)) return false;
        if (!deepEquals(mapValue)(value.get(key))) return false;
      }

      return true;
    }

    // handle Set comparison
    if (object instanceof Set) {
      if (object.size !== value.size) return false;

      // eslint-disable-next-line no-restricted-syntax
      for (const item of object.entries()) {
        if (!value.has(item[0])) return false;
      }

      return true;
    }

    // try to use valueOf or toString for comparison
    if (object.valueOf !== Object.prototype.valueOf) return object.valueOf() === value.valueOf();
    if (object.toString !== Object.prototype.toString) return object.toString() === value.toString();

    // handle Object comparison
    const keys = Object.keys(object);

    if (keys.length !== Object.keys(value).length) return false;

    for (let index = 0; index < keys.length; index += 1) {
      const currentKey = keys[index];
      if (!Object.prototype.hasOwnProperty.call(value, currentKey)) return false;
      if (!deepEquals(object[currentKey])(value[currentKey])) return false;
    }

    return true;
  }

  return false;
};


/**
 * Object comparison
 * @param object
 * @param error
 */
const equals = (object, error = 'The provided value does not equal') => createValidator(deepEquals(object), error);

export default equals;
