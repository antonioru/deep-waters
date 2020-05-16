import createValidator from './utils/createValidator';

/**
 * Takes a value and returns true only if it is of type boolean and of value `false`
 * @param value
 * @returns {boolean}
 */
const isFalse = (value) => value === false;

export default createValidator(isFalse, 'The provided value is not false');
