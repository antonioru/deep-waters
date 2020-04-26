import compose from './compose';
import isNumber from './isNumber';

const lessThan = (number) => compose(
  isNumber,
  (value) => value < number,
);

export default lessThan;
