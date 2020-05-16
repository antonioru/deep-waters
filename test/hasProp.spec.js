import hasProp from '../src/hasProp';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';

describe('hasProp', () => {
  shouldBeAHigherOrderFunction(hasProp, 'length');

  shouldBeValidFor(hasProp('length'), [[1, 2, 3], [], () => null, { length: 10 }]);
  shouldBeInvalidFor(hasProp('length'), [1, 0, undefined, null, new Set(), new Map()]);
});
