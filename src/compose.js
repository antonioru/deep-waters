/**
 * It's the very backbone of Deep Waters, it takes a series of validators and returns a new function that takes a
 * value and evaluates whether that value is valid for all the previously provided validators.
 * @param validators
 * @returns {function(*=): boolean}
 */
const compose = (...validators) => (value) => {
  let response = Response.of({ valid: true });

  validators.forEach((fn) => {
    response = response.merge(() => fn(value));
  });

  return response.emit();
};


export default compose;
