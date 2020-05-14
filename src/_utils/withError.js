const INTERNAL_NAME_KEY = Symbol('__dw_internal_name');

const prototypeFrom = (fn, result) => {
  const emptyObj = Object.create(null);

  emptyObj[INTERNAL_NAME_KEY] = result[INTERNAL_NAME_KEY] || fn.name || 'anonymous';

  return emptyObj;
};


const withError = (fn, error) => (...args) => {
  const result = fn(...args);
  const response = Object.create(prototypeFrom(fn, result));

  response.valid = result.valid !== undefined && typeof result.valid === 'boolean' ? result.valid : result;

  if (response.valid === false) {
    response.error = error;
  }

  return Object.freeze(response);
};

export default withError;
