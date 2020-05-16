import isWeakSet from '../src/isWeakSet';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isWeakSet', () => {
  shouldBeAValidator(isWeakSet, new WeakSet());

  shouldBeValidFor(isWeakSet, [new WeakSet(), new WeakSet([])]);
  shouldBeInvalidFor(isWeakSet, [1, 0, '', 'foo', undefined, null, {}, [], false, true, () => null]);
});
