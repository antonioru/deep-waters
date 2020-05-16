import isNull from '../src/isNull';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isNull', () => {
  shouldBeAValidator(isNull, null, false);

  shouldBeValidFor(isNull, [null]);
  shouldBeInvalidFor(isNull, [1, 0, '', 'foo', undefined, new Map(), new Set()]);
});
