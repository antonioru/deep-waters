import matchesPattern from '../matchesPattern';
import createValidator from '../utils/createValidator';

const isChina = matchesPattern(/1[34578][012356789]\d{8}|134[012345678]\d{7}/);

export default createValidator(isChina, 'the provided value is not a valid Chinese phone number');
