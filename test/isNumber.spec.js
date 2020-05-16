import isNumber from '../src/isNumber';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isNumber', () => {
  shouldBeAValidator(isNumber, Number.MAX_SAFE_INTEGER);

  shouldBeValidFor(isNumber, [1, 0, -1, Number.MAX_SAFE_INTEGER, Number.MIN_VALUE, Infinity]);
  shouldBeInvalidFor(isNumber, ['', 'foo', undefined, new Map(), new Set()]);
});
