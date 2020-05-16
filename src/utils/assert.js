/**
 * Throws an error if the given assertion resolves to `false`
 * @param assertion
 * @param error
 */
const assert = (assertion, error = 'Invalid value provided') => {
  if (!assertion) throw new Error(error);
};

export default assert;
