import { INTERNAL_NAME_KEY } from '../_internals/_constants';

const Immutable = Object.freeze;

const assertResponse = (response) => {
  if (response.valid !== false && response.valid !== true) {
    throw new Error('The response should have a `valid` property of type boolean');
  }
  if (!!response.errors && !Array.isArray(response.errors)) {
    throw new Error('When provided the `errors` property of a response should be a valid array of strings');
  }
  if (!!response.error && typeof response.error === 'string') {
    throw new Error('When provided the `error` property of a response should be a valid strings');
  }
};

const lift = (response, nextResponse) => {
  const { valid, errors = [], error } = nextResponse;
  const nextValid = valid && response.valid;
  const nextErrors = [...errors, ...(response.errors || [])];
  const nextDetails = Object.create(null);

  if (error) {
    nextErrors.push(error);
  }

  if (nextResponse[INTERNAL_NAME_KEY] && typeof nextResponse[INTERNAL_NAME_KEY] === 'string') {
    console.log('GNIFRO', nextResponse);
    nextDetails[nextResponse[INTERNAL_NAME_KEY]] = nextResponse;
  }

  return Immutable({
    valid: nextValid,
    errors: nextErrors,
    details: {
      ...(response.details || {}),
      ...nextDetails,
    },
  });
};


/**
 * Response is a monad ...
 * @type {any}
 */
const Response = (response) => {
  assertResponse(response);

  const currentResponse = Immutable(response);

  return Immutable({
    /**
     * Merge the response object returned from the fn function with the with the current state
     * @param fn
     * @returns {*}
     */
    merge: (fn) => {
      const nextResponse = lift(currentResponse, fn(currentResponse));
      assertResponse(nextResponse);

      return Response.of(nextResponse);
    },
    /**
     * Receives a function and apply it passing the current state
     * @param fn
     * @returns {*}
     */
    apply: (fn) => fn(currentResponse),
    /**
     * Emits the current state.
     * @returns {unknown[] | {errors} | * | Readonly<{errors}|*>}
     */
    emit: () => currentResponse,
  });
};

Response.of = Response;

export default Response;
