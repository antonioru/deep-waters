import isFalse from '../src/isFalse';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isFalse', () => {
  shouldBeAValidator(isFalse, false, true);

  shouldBeValidFor(isFalse, [false]);
  shouldBeInvalidFor(isFalse, [1, 0, '', 'foo', undefined, null, {}, [], true, new Set(), new Map(), () => null]);
});
