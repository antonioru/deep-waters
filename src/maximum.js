import compose from './compose';
import isNumber from './isNumber';

const maximum = (number) => compose(
  isNumber,
  (value) => value <= number,
);

export default maximum;
