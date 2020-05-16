import matchesPattern from '../matchesPattern';
import createValidator from '../utils/createValidator';

const isRussia = matchesPattern(/^((\+7|7|8)+([0-9]){10})$/);

export default createValidator(isRussia, 'the provided value is not a valid Russian phone number');
