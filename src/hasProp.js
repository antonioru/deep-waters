import compose from './compose';
import isTruthy from './isTruthy';

/**
 * Takes a string defining a property name and returns a new function evaluation whether the received object exists and
 * has the defined property.
 * @param prop
 * @returns {function(*=): boolean}
 */
const hasProp = (prop) => compose(
  isTruthy,
  (value) => prop && value[prop] !== undefined,
);

export default hasProp;
