import isSymbol from '../src/isSymbol';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isSymbol', () => {
  shouldBeAValidator(isSymbol, Symbol('foo'));

  shouldBeValidFor(isSymbol, [Symbol('foo'), Symbol('')]);
  shouldBeInvalidFor(isSymbol, [1, 0, undefined, null, {}, [], true, false, new Map(), new Set()]);
});
