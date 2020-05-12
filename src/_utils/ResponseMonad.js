const Immutable = Object.freeze;

const assertState = (state) => {
  if (state.valid !== false && state.valid !== true) {
    throw new Error('The response should have a `valid` property of type boolean');
  }
  if (!!state.errors && !Array.isArray(state.errors)) {
    throw new Error('The response.error should be a valid array of strings');
  }
};


const lift = (state, { valid, errors = [] }) => Immutable({
  valid: valid && state.valid,
  errors: [...errors, ...(state.errors || [])],
});

/**
 * Response is a monad ...
 * @type {any}
 */
const Response = Immutable({
  of: (state) => {
    assertState(state);

    const currentState = Immutable(state);

    return Immutable({
      /**
       * Merge the response object returned from the fn function with the with the current state
       * @param fn
       * @returns {*}
       */
      merge: (fn) => {
        const nextState = lift(currentState, fn(currentState));
        assertState(nextState);

        return Response.of(nextState);
      },
      /**
       * Receives a function and apply it passing the current state
       * @param fn
       * @returns {*}
       */
      apply: (fn) => fn(currentState),
      /**
       * Emits the current state.
       * @returns {unknown[] | {errors} | * | Readonly<{errors}|*>}
       */
      emit: () => currentState,
    });
  },
});

export default Response;
