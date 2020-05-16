/**
 * Takes a response object and overrides its error message
 * @param response
 * @param error
 * @returns {*}
 */
const overrideError = (response, error) => {
  if (response.valid === false) {
    return ({
      ...response,
      error: typeof error === 'function' ? error() : error,
    });
  }

  return response;
};

export default overrideError;
