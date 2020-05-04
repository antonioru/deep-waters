import compose from './compose';
import biggerThan from './biggerThan';
import smallerThan from './smallerThan';

/**
 * Evaluates whether the received value is between at defined range
 * @param min
 * @returns {function(*=): function(*=): boolean}
 */
const between = (min) => (max) => compose(
  biggerThan(min),
  smallerThan(max),
);

export default between;
