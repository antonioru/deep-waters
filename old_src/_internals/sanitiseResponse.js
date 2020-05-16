/**
 * Takes a response object and make cure it does not contain any error if its valid property is set to 'true'
 * @param response
 */
const sanitizeResponse = (response) => {
  const next = { ...response };

  if (next.valid) {
    delete next.errors;
    delete next.error;
  }

  return next;
};

export default sanitizeResponse;
