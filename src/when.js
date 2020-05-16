import isRespObject from './utils/isRespObject';
import { NeutralOperation } from './utils/_internals';

const when = (condition, fn) => (value) => {
  const result = condition(value);
  const valid = isRespObject(result) ? result.valid : result;

  return valid ? fn(value) : NeutralOperation; // pass the next
};

export default when;
