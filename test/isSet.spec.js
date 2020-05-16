import isSet from '../src/isSet';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isSet', () => {
  shouldBeAValidator(isSet, new Set([1, 2, 3]));

  shouldBeValidFor(isSet, [new Set([1, 2, 3]), new Set()]);
  shouldBeInvalidFor(isSet, [1, 0, '', 'foo', undefined, null, {}, [], false, true, () => null]);
});
