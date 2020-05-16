import smallerThan from '../src/smallerThan';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';

describe('smallerThan', () => {
  shouldBeAHigherOrderFunction(smallerThan);
  shouldBeAValidator(smallerThan(5), 3);

  shouldBeValidFor(smallerThan(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  shouldBeInvalidFor(smallerThan(10), [10, 11, 12, 13, Number.MAX_SAFE_INTEGER, Infinity]);

  shouldBeValidFor(smallerThan(0), [-1, -2, -3, -4, -5, -6, -7, -8, -9, Number.MIN_SAFE_INTEGER]);
  shouldBeInvalidFor(smallerThan(0), [0, 1, 2, 3, 4]);

  shouldBeValidFor(smallerThan(-10), [-11, -12, -13]);
  shouldBeInvalidFor(smallerThan(-10), [-9, 0, 10]);

  shouldBeInvalidFor(smallerThan(0), [1, [], {}, Symbol('foo'), 'foo', undefined, null, new Map(), new Set()]);
});
