import compose from './compose';
import isString from './isString';
import matchesPattern from './matchesPattern';
import createValidator from './utils/createValidator';

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

export default createValidator(isIPv4, 'The provided value is not a valid IPv4');
