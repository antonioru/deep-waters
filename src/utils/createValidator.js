import memo from './memo';
import Response from './ResponseMonad';
import assertResponse from './assertResponse';
import isRespObject from './isRespObject';
import createResponse from './createResponse';

/**
 * Takes a function and returns a memoized validator
 * @param fn
 * @param errorCreator
 */
const createValidator = (fn, errorCreator) => {
  const memoized = memo((...args) => {
    const result = fn(...args);
    const error = typeof errorCreator === 'string' ? errorCreator : errorCreator(...args);

    assertResponse(result);

    if (isRespObject(result)) {
      if (result.valid === false) {
        return Response.of(result).merge(() => ({ valid: false, errors: [error] })).emit();
      }

      return Response.of(result).emit();
    }

    return createResponse(result, error).emit();
  });

  // for tests purposes only
  if (!!process && process.env && process.env.NODE_ENV === 'test') {
    memoized.defaultErrMsg = errorCreator;
  }

  return memoized;
};

export default createValidator;
