import matchesPattern from '../matchesPattern';
import createValidator from '../utils/createValidator';

const isUSA = matchesPattern(/1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?/);

export default createValidator(isUSA, 'the provided value is not a valid USA phone number');
