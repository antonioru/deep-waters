import compose from '../compose';
import isString from './isString';
import matchesPattern from './matchesPattern';

const isEmail = compose(
  isString,
  matchesPattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
);

export default isEmail;
