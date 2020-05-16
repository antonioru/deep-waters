import Response from './utils/ResponseMonad';

/**
 * Takes a series of validators and returns a new function that receives a
 * value or evaluates whether that value is valid for at least one of the provided validators.
 * @param validators
 * @returns {function(*=): boolean}
 */
const or = (...[head, ...xs]) => (...args) => {
  const initialState = Response.of(head(...args), Response.or);

  return xs.reduce((state, validator) => state.merge(() => validator(...args)), initialState).emit();
};

export default or;
