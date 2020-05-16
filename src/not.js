import isRespObject from './utils/isRespObject';
import assertResponse from './utils/assertResponse';
import sanitizeResp from './utils/sanitizeResp';

/**
 *
 * @param fn
 * @returns {function(...[*]): boolean}
 */
const not = (fn) => (...args) => {
  const result = fn(...args);
  assertResponse(result);

  return isRespObject(result) ? sanitizeResp({ ...result, valid: !result.valid }) : !result;
};

export default not;
