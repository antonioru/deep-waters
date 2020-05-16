import matchesPattern from '../matchesPattern';
import createValidator from '../utils/createValidator';

// eslint-disable-next-line max-len
const isGermany = matchesPattern(/^([+][0-9]{1,3}[ .-])?([(]{1}[0-9]{1,6}[)])?([0-9 .\-/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/);

export default createValidator(isGermany, 'the provided value is not a valid German phone number');
