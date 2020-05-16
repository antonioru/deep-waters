import isMap from '../src/isMap';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isMap', () => {
  shouldBeAValidator(isMap, new Map());

  shouldBeValidFor(isMap, [new Map(), new Map([['foo', 'bar']]), new Map([[new Set([1, 2, 3]), 'foo']])]);
  shouldBeInvalidFor(isMap, [1, 0, '', 'foo', undefined, null, new Set()]);
});
