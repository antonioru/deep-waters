import compose from './compose';
import isTruthy from './isTruthy';

/**
 * Takes a prop and returns a new function evaluating that the received object has the defined prop.
 * @param prop
 * @returns {function(*=): boolean}
 */
const hasProp = (prop) => compose(
  isTruthy,
  (value) => prop && value[prop] !== undefined,
);

export default hasProp;
