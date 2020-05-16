import isDivisibleBy from '../src/isDivisibleBy';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';

describe('isDivisibleBy', () => {
  shouldBeAHigherOrderFunction(isDivisibleBy, 1);


  shouldBeValidFor(isDivisibleBy(1), Array.from({ length: 30 }).map((_, i) => i));
  shouldBeValidFor(isDivisibleBy(2), Array.from({ length: 30 }).map((_, i) => i * 2));

  shouldBeInvalidFor(isDivisibleBy(0), Array.from({ length: 30 }).map((_, i) => i));
  shouldBeInvalidFor(isDivisibleBy(0), [1, 0, undefined, null, new Set(), new Map()]);
});
