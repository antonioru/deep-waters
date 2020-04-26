import or from './or';
import isIPv4 from './isIPv4';
import isIPv6 from './isIPv6';

/**
 * Takes a value and return true if it's a valid IP (v4 or v6) string
 * @param value
 * @returns {boolean}
 */
const isIP = or(isIPv4, isIPv6);

export default isIP;
