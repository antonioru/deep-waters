import compose from '../compose';
import isNumber from './isNumber';

const biggerThan = (number) => compose(
  isNumber,
  (value) => value > number,
);

export default biggerThan;
