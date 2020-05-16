import createErrors from './creteErrors';
import assertResponse from './assertResponse';

// shortcut
const Immutable = Object.freeze;

/**
 * Takes a possible response and makes sure to return a safer response object
 * @param maybeResp
 * @returns {*}
 */
const safeResponseFrom = (maybeResp) => {
  assertResponse(maybeResp);
  return typeof maybeResp === 'boolean' ? { valid: maybeResp } : maybeResp;
};

/**
 * The Response monad is internally used to compose the responses from various validators.
 * It encapsulate a value (a response object) and uses the provided composing function (`or` or `and`)
 * to merge the next response.
 * The result of a merge is a new Response monad.
 */
const Response = (response, comparison = Response.and) => {
  const { valid, errors = [] } = safeResponseFrom(response);
  // eslint-disable-next-line no-use-before-define
  const current = prototypeFrom(valid, errors, comparison); // creates the prototype to attach to the response

  current.valid = valid;

  if (!valid) {
    current.errors = errors;
  }

  return Immutable(current);
};

/**
 * Creates the prototype of the Response monad.
 * It will
 * @param valid
 * @param errors
 * @param comparison
 * @returns {null}
 */
const prototypeFrom = (valid, errors, comparison) => {
  const prototype = Object.create(null);

  /**
   * Merge the response object returned from the fn function with the with the current state
   */
  prototype.merge = (fn) => {
    const result = safeResponseFrom(fn(prototype.emit()));
    const nextValid = comparison(valid, result.valid);

    if (!nextValid) {
      const nextErrors = [...(createErrors(result.errors)), ...errors];
      return Response.of({ valid: nextValid, errors: nextErrors }, comparison);
    }

    return Response.of({ valid: nextValid }, comparison);
  };
  /**
   * Receives a function and apply it passing the current state
   */
  prototype.apply = (fn) => fn(prototype.emit());
  /**
   * Returns the current values
   */
  prototype.emit = () => {
    const result = Object.create(null);
    result.valid = valid;

    if (!valid) {
      result.errors = errors;
    }

    return Immutable(result);
  };

  return Object.create(prototype);
};

// let's make it cool
Response.of = Response;

// the AND comparison fn
Response.and = (v1, v2) => !!(v1 && v2);

// the OR comparision fn
Response.or = (v1, v2) => !!(v1 || v2);

export default Response;
