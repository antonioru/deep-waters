import { INTERNAL_NAME_KEY } from '../_internals/_constants';

const makePrototypeFrom = (fn, name, result) => {
  const emptyObj = Object.create(null);

  emptyObj[INTERNAL_NAME_KEY] = result[INTERNAL_NAME_KEY] || name || 'anonymous';

  return emptyObj;
};


const withError = (fn, error, name = fn.name) => (...args) => {
  const result = fn(...args);
  const response = Object.create(makePrototypeFrom(fn, name, result));

  response.valid = result.valid !== undefined && typeof result.valid === 'boolean' ? result.valid : result;

  if (response.valid === false) {
    response.error = error;
  }

  return Object.freeze(response);
};

export default withError;
