import createValidator from './utils/createValidator';

/**
 * Takes a string defining a property name and returns a new function evaluation whether the received object exists and
 * has the defined property.
 * @param prop
 * @param error
 * @returns {function(*=): boolean}
 */
const hasProp = (prop, error = `The provided value does not have the property ${prop}`) => createValidator(
  (value) => value !== undefined && value !== null && prop && value[prop] !== undefined,
  error,
);

export default hasProp;
