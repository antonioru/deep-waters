import minLength from '../src/minLength';
import shouldCreateValidators from './utils/shouldCreateValidators';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';

describe('minLength', () => {
  shouldCreateValidators(minLength, 3, {
    validParam: 'foo',
    errorParam: 'fo',
  });

  shouldBeValidFor(minLength(5), ['12345', [1, 2, 3, 4, 5], '123456', [1, 2, 3, 4, 5, 6]]);

  shouldBeInvalidFor(minLength(5), ['foo', 'fooo', [1, 2], [1, 2, 3, 4]]);
  shouldBeInvalidFor(minLength(6), ['1', 'foo', '', 1, Number.NaN, () => null, undefined, null, new Set(), new Map()]);
});
