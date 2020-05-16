import Response from './utils/ResponseMonad';

const createReducer = (...args) => (state, validator) => {
  if (state.valid === true) {
    return state.merge(() => validator(...args));
  }

  return state;
};

/**
 * Takes a series of validators and returns a new function that receives a
 * value and evaluates whether that value is valid for all the provided validators.
 * If one validator returns false (or a falsy response object) it stops merging the other responses.
 * @param validators
 * @returns {function(*=): boolean}
 */
const and = (...[head, ...xs]) => (...args) => {
  const initialState = Response.of(head(...args), Response.and);

  return xs.reduce(createReducer(...args), initialState).emit();
};

export default and;
