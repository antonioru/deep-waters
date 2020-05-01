import compose from './compose';
import isNumber from './numbers/isNumber';

const isDivisibleBy = (number) => compose(
  isNumber,
  (value) => value % number === 0,
);

export default isDivisibleBy;
