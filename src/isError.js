import ofType from './ofType';

/**
 * Evaluates whether the given value is of type Error
 * @param value
 * @returns {boolean}
 */
const isError = ofType('Error');

export default isError;
