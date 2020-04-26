import compose from './compose';
import isString from './isString';
import matchesPattern from './matchesPattern';


// eslint-disable-next-line max-len
const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * Takes a value and return true if it's a valid IP v4 string
 * @param value
 * @returns {boolean}
 */
const isIPv4 = compose(
  isString,
  matchesPattern(ipv4Regex),
);

export default isIPv4;
