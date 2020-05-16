import biggerThan from '../src/biggerThan';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';

describe('biggerThan', () => {
  shouldBeAHigherOrderFunction(biggerThan);
  shouldBeAValidator(biggerThan(5), 7);

  shouldBeValidFor(biggerThan(10), [11, 12, 13, Number.MAX_SAFE_INTEGER, Infinity]);
  shouldBeInvalidFor(biggerThan(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  shouldBeValidFor(biggerThan(0), [1, 2, 3, 4, 5, 6, 7]);
  shouldBeInvalidFor(biggerThan(0), [-1, -2, -3, -4, -5, -6, -7, -8, -9, Number.MIN_SAFE_INTEGER]);

  shouldBeValidFor(biggerThan(-10), [-9, 0, 10]);
  shouldBeInvalidFor(biggerThan(-10), [-11, -12, -13]);

  shouldBeInvalidFor(biggerThan(1), [0, [], {}, Symbol('foo'), 'foo', undefined, null, new Map(), new Set()]);
});
