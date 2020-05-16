import isBoolean from '../src/isBoolean';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isBoolean', () => {
  shouldBeAValidator(isBoolean, true, 'foo');

  shouldBeValidFor(isBoolean, [true, false]);
  shouldBeInvalidFor(isBoolean, [1, 0, '', 'foo', undefined, null, new Set(), new Map()]);
});
