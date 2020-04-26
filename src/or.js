/**
 * Takes a series of validator functions and return a new functions that evaluate whether the given value
 * is a valid value for at least one of the previous validators.
 * @param validators
 * @returns {function(*=): boolean}
 */
const or = (...validators) => (value) => validators.reduce((acc, current) => acc || current(value), false);

export default or;
