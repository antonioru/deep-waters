import isEmpty from '../src/isEmpty';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';
import { stubFalse } from '../src/utils/_internals';

describe('isEmpty', () => {
  shouldBeAValidator(isEmpty, '', 'foo');

  shouldBeValidFor(isEmpty, ['', [], {}, new Map(), new Set()]);

  shouldBeInvalidFor(isEmpty, ['foo', [1, 2, 3], { foo: 'bar' }, new Map([['foo', 1]]), new Set([1, 2, 3])]);
  shouldBeInvalidFor(isEmpty, [null, undefined, new WeakMap(), new WeakSet(), stubFalse]);
});
