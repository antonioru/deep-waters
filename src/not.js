/**
 * Takes a function and return a new function which will return the opposite of the given one
 * @param fn
 * @returns {function(*=): boolean}
 */
const not = (fn) => (value) => !fn(value);

export default not;
