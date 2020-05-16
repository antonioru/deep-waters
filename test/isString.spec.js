import isString from '../src/isString';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isString', () => {
  shouldBeAValidator(isString, 'foo');

  shouldBeValidFor(isString, ['foo', 'bar', '', '1', '0']);
  shouldBeInvalidFor(isString, [1, 0, undefined, null, {}, [], true, false, new Map(), new Set(), Symbol('foo')]);
});
