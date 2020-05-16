import isWeakMap from '../src/isWeakMap';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isWeakMap', () => {
  shouldBeAValidator(isWeakMap, new WeakMap());

  shouldBeValidFor(isWeakMap, [new WeakMap()]);
  shouldBeInvalidFor(isWeakMap, [1, 0, '', 'foo', undefined, [], {}, false, true, null, new Map(), new Set()]);
});
