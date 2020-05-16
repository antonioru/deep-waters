import isFalsy from '../src/isFalsy';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isFalsy', () => {
  shouldBeAValidator(isFalsy, false, 'foo');

  shouldBeValidFor(isFalsy, [false, 0, '', null, undefined, NaN]);
  shouldBeInvalidFor(isFalsy, [1, 'foo', {}, [], true, new Set(), new Map(), () => null]);
});
