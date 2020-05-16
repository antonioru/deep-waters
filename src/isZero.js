import createValidator from './utils/createValidator';

/**
 * Returns true if the given value is zero
 * @param value
 * @returns {boolean}
 */
const isZero = (value) => value === 0;

export default createValidator(isZero, 'the provided value is not zero');
