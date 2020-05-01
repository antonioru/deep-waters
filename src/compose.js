/**
 * Takes a series of validator functions and return a new functions that evaluate whether the given value
 * is a valid value for all the previous validators.
 * It also removes duplicated validators
 * @param validators
 * @returns {function(*=): boolean}
 */
const compose = (...validators) => (value) => Array.from(new Set(validators)).every((validator) => validator(value));

export default compose;
