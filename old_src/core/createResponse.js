import INTERNAL_KEY from '../_internals/INTERNAL_KEY';

const emptyPrototype = () => Object.create(null);

/**
 * Takes a boolean value and an error string then return a response object defined as:
 * { valid: boolean, error?: string, errors?: string[] }
 */
const createResponse = (isValid, errorOrErrors) => {
  const prototype = emptyPrototype();
  prototype[INTERNAL_KEY] = true;
  const response = Object.create(prototype);

  response.valid = isValid;

  if (isValid === false && errorOrErrors) {
    if (Array.isArray(errorOrErrors)) {
      response.errors = errorOrErrors;
      return response;
    }

    response.error = typeof errorOrErrors === 'function' ? errorOrErrors() : errorOrErrors;
  }

  return response;
};

export default createResponse;
