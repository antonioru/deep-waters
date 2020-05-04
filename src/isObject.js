import ofClass from './ofClass';

/**
 * Returns true if (and only) the given value is a valid object
 * @type {function(*=): boolean}
 */
const isObject = ofClass('Object');

export default isObject;
