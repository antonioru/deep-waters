import assert from './assert';
import isRespObject from './isRespObject';
import { NeutralOperation } from './_internals';

/**
 * Assert if a given value is a valid response
 * @param value
 */
const assertResponse = (value) => assert(
  value === NeutralOperation || typeof value === 'boolean' || isRespObject(value),
  'Invalid response received, a valid response is a boolean or an object of type Response',
);


export default assertResponse;
