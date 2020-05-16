import ofUniqueItems from '../src/ofUniqueItems';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('ofUniqueItems', () => {
  shouldBeAValidator(ofUniqueItems, [1, 2, 3]);

  shouldBeValidFor(ofUniqueItems, [
    [1, 2, 3, 4, 5, 6, 7],
    ['foo', '', 'bar'],
  ]);

  shouldBeInvalidFor(ofUniqueItems, [
    ['foo', 'foo', 'bar', 'bar'],
    [1, 2, 3, 4, 1],
    'foo', null, undefined, Symbol('foo'), 1, Number.NaN,
  ]);
});
