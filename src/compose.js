/**
 * Takes a series of validator functions and return a new functions that evaluate whether the given value
 * is a valid value for all the previous validators.
 * @param validators
 * @returns {function(*=): boolean}
 */
const compose = (...validators) => (value) => validators.every((validator) => validator(value));

export default compose;
