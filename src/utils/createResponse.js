import createErrors from './creteErrors';
import Response from './ResponseMonad';


/**
 * Takes a boolean value and an error string then return a response object defined as:
 * { valid: boolean, error?: string, errors?: string[] }
 */
const createResponse = (isValid, errorValue) => {
  const response = { valid: isValid };

  if (isValid === false && !!errorValue) {
    response.errors = createErrors(errorValue);
  }

  return Response.of(response);
};

export default createResponse;
