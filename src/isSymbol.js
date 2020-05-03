/**
 * Evaluates whether the given value is of type symbol
 * @param value
 * @returns {boolean}
 */
const isBigInt = (value) => typeof value === 'symbol';

export default isBigInt;
