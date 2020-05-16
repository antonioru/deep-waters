import overrideError from '../_internals/overrideError';
import assertError from '../_internals/assertError';
import assertValidatorResponse from '../_internals/assertValidatorResponse';
import createResponse from './createResponse';
import isResponseObject from './isResponseObject';

/**
 * Takes a validator function and an error string then return a new validator which response is defined as:
 * `{ valid: boolean, error?: string }`
 *
 * @param validator
 * @param error
 * @returns {function(...[*]): {valid: *, error: (*|null)}}
 */
const withError = (validator, error) => (...args) => {
  const result = validator(...args);
  assertError(error);
  assertValidatorResponse(result);

  return isResponseObject(result) ? overrideError(result, error) : createResponse(result, error);
};

export default withError;
