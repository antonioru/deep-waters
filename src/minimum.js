import compose from './compose';
import isNumber from './isNumber';

const minimum = (number) => compose(
  isNumber,
  (value) => value >= number,
);

export default minimum;
