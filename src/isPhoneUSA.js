import compose from './compose';
import isString from './isString';
import matchesPattern from './matchesPattern';

const isPhoneUSA = compose(
  isString,
  matchesPattern(/1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?/),
);

export default isPhoneUSA;
