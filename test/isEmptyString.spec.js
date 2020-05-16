import isEmptyString from '../src/isEmptyString';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isEmptyString', () => {
  shouldBeAValidator(isEmptyString, '');

  shouldBeValidFor(isEmptyString, ['', ' ', '  ']);
  shouldBeInvalidFor(isEmptyString, [1, 0, [], {}, Symbol('foo'), 'foo', undefined, null, new Map(), new Set()]);
});
