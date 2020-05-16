import isResponseObject from './isResponseObject';
import assert from '../_internals/assert';
import assertValidatorResponse from '../_internals/assertValidatorResponse';
import sanitizeResponse from '../_internals/sanitiseResponse';
import createResponse from './createResponse';

const reduceValidProperty = (maybeResp) => (isResponseObject(maybeResp) ? maybeResp.valid : maybeResp);
const reduceErrors = (maybeResp) => (maybeResp.error ? [maybeResp.error] : [...(maybeResp.errors || [])]);

const mergeWith = (comparisonFn) => (state, nextState) => {
  if (typeof state === 'boolean' && typeof nextState === 'boolean') {
    return createResponse(comparisonFn(state, nextState));
  }

  return createResponse(
    comparisonFn(reduceValidProperty(state), reduceValidProperty(nextState)),
    [...reduceErrors(state), ...reduceErrors(nextState)],
  );
};

/**
 * Returns a new function that will compose the value using the comparisonFn
 */
const composeWith = (comparisonFn, exitOnFalse = false) => {
  const mergeState = mergeWith(comparisonFn);

  return (...validators) => (value) => {
    const uniqueValidators = Array.from(new Set(validators));
    assert(validators.length >= 2, '\'or\' function should receive at least two parameters');


    let i = 0;
    let state = false;
    while (i < uniqueValidators.length) {
      const validator = uniqueValidators[i];
      const nextState = validator(value);
      assertValidatorResponse(nextState);

      state = mergeState(state, nextState);
      i += 1;

      if (exitOnFalse && (!nextState || nextState.valid === false)) {
        break;
      }
    }

    console.log('RESTURNING STATE, state', state);
    return isResponseObject(state) ? sanitizeResponse(state) : state;
  };
};

export default composeWith;
