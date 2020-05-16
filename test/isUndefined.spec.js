import isUndefined from '../src/isUndefined';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isUndefined', () => {
  shouldBeAValidator(isUndefined, undefined, false);

  shouldBeValidFor(isUndefined, [undefined]);
  shouldBeInvalidFor(isUndefined, [1, 0, '', 'foo', null, [], {}, Symbol('foo'), () => null, new Map(), new Set()]);
});
