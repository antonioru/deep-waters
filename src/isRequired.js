import isTruthy from './isTruthy';

/**
 * Takes a value and returns true if it exists;
 * It's a semantic shortcut to `isTruthy`
 * @param value
 * @returns {boolean}
 */
const isRequired = isTruthy;

export default isRequired;
