import isZero from '../src/isZero';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isZero', () => {
  shouldBeAValidator(isZero, 0);

  shouldBeValidFor(isZero, [0]);
  shouldBeInvalidFor(isZero, [1, Symbol('foo'), undefined, null, {}, [], true, false, new Map(), new Set()]);
});
