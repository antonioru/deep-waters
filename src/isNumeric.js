import compose from './compose';
import isString from './isString';
import matchesPattern from './matchesPattern';

const isNumeric = compose(
  isString,
  matchesPattern(/^-{0,1}\d+$/),
);

export default isNumeric;
