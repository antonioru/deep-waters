import isTrue from '../src/isTrue';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isTrue', () => {
  shouldBeAValidator(isTrue, true, false);

  shouldBeValidFor(isTrue, [true]);
  shouldBeInvalidFor(isTrue, [1, 0, '', 'foo', undefined, null, {}, [], false, new Set(), new Map(), () => null]);
});
