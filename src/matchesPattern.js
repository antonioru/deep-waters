import createValidator from './utils/createValidator';

/**
 * Returns a new validator matching the given pattern
 */
const matchesPattern = (regex, error = 'The provided value does not match the regular expression') => createValidator(
  (str) => !!regex.test(str),
  error,
);

export default matchesPattern;
