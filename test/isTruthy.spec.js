import isTruthy from '../src/isTruthy';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isTruthy', () => {
  shouldBeAValidator(isTruthy, true, null);

  shouldBeValidFor(isTruthy, [1, 'foo', {}, [], true, new Set(), new Map(), () => null]);
  shouldBeInvalidFor(isTruthy, [false, 0, '', null, undefined, NaN]);
});
