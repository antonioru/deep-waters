import createValidator from './utils/createValidator';
import Response from './utils/ResponseMonad';

const validateForEveryItem = (validator) => (valuesArray) => {
  if (!Array.isArray(valuesArray)) {
    return Response.of({ valid: false, errors: ['Invalid array provided'] }).emit();
  }

  const [head, ...xs] = valuesArray;
  const initialState = Response.of(validator(head), Response.and);

  return xs.reduce((state, value) => state.merge(() => validator(value)), initialState).emit();
};

/**
 * Makes sure that every item of the array is valid for the received validator
 */
const every = (validator, error = 'One or more items does not match with the provided validator') => (
  createValidator(validateForEveryItem(validator), error)
);

export default every;
