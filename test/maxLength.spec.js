import maxLength from '../src/maxLength';
import shouldCreateValidators from './utils/shouldCreateValidators';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';

describe('maxLength', () => {
  shouldCreateValidators(maxLength, 3, {
    validParam: 'foo',
    errorParam: 'fooo',
  });

  shouldBeValidFor(maxLength(5), ['12345', [1, 2, 3, 4], '123', [1], [], '']);

  shouldBeInvalidFor(maxLength(5), ['fooooo', [1, 2, 4, 5, 6, 7]]);
  shouldBeInvalidFor(maxLength(5), [1, Number.NaN, undefined, null, {}, new Set(), new Map(), Symbol('')]);
});
