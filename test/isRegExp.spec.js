import isRegExp from '../src/isRegExp';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isRegExp', () => {
  shouldBeAValidator(isRegExp, new RegExp(/test/));

  shouldBeValidFor(isRegExp, [new RegExp(/test/), /test/i]);
  shouldBeInvalidFor(isRegExp, ['', 'foo', 0, 1, null, {}, [], undefined, new Map(), new Set()]);
});
