import isFunction from '../src/isFunction';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isFunction', () => {
  const fn = () => null;
  const fn2 = function Fn2() {
    return null;
  };

  shouldBeAValidator(isFunction, fn);

  shouldBeValidFor(isFunction, [fn, fn2]);
  shouldBeInvalidFor(isFunction, [1, 0, '', 'foo', undefined, null, new Set(), new Map()]);
});
