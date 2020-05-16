import compose from './compose';
import biggerThan from './biggerThan';
import smallerThan from './smallerThan';
import createValidator from './utils/createValidator';

/**
 * Evaluates whether the received value is between at defined range
 * @param min
 * @param max
 * @param error
 * @returns {function(*=): function(*=): boolean}
 */
const between = (min, max, error = `The provided value is not in between ${min} and ${max}`) => createValidator(
  compose(biggerThan(min), smallerThan(max)),
  error,
);

export default between;
