import not from './not';
import isFalsy from './isFalsy';

/**
 * Takes a value and returns true if it's not falsy
 * @param value
 * @returns {boolean}
 */
const isTruthy = not(isFalsy);

export default isTruthy;
