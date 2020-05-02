import compose from './compose';
import isNumber from './isNumber';

const smallerThan = (number) => compose(
  isNumber,
  (value) => value < number,
);

export default smallerThan;
