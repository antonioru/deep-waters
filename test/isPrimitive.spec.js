import isPrimitive from '../src/isPrimitive';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';
import { stubTrue } from '../src/utils/_internals';

describe('isPrimitive', () => {
  shouldBeAValidator(isPrimitive, 'foo', {});

  shouldBeValidFor(isPrimitive, ['foo', false, true, Symbol('foo'), 10, undefined]);
  shouldBeInvalidFor(isPrimitive, [[], {}, new WeakMap(), new WeakSet(), new Map(), new Set(), null, stubTrue]);
});
