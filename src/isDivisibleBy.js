import compose from './compose';
import isNumber from './isNumber';

const isDivisibleBy = (number) => compose(
  isNumber,
  (value) => value % number === 0,
);

export default isDivisibleBy;
