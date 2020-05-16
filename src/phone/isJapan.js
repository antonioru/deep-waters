import matchesPattern from '../matchesPattern';
import createValidator from '../utils/createValidator';

const isJapan = matchesPattern(/^(?:\d{10}|\d{3}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{3}-\d{4}-\d{4})$/);


export default createValidator(isJapan, 'the provided value is not a valid Japanese phone number');
