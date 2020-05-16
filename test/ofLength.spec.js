import ofLength from '../src/ofLength';
import shouldCreateValidators from './utils/shouldCreateValidators';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';

describe('ofLength', () => {
  shouldCreateValidators(ofLength, 3, {
    validParam: 'foo',
    errorParam: 'fo',
  });

  shouldBeValidFor(ofLength(5), ['12345', [1, 2, 3, 4, 5]]);

  shouldBeInvalidFor(ofLength(5), ['foo', 'foooooo', [1, 2, 3, 4, 5, 6], [1, 2, 3, 4]]);
  shouldBeInvalidFor(ofLength(6), ['1', 'foo', '', undefined, null, new Set(), new Map()]);
  shouldBeInvalidFor(ofLength(5), ['1', 'foo', '', undefined, null, 1, 0, new Map()]);
});
