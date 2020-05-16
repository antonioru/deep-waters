import isObject from '../src/isObject';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isObject', () => {
  shouldBeAValidator(isObject, { foo: 'bar' });

  shouldBeValidFor(isObject, [{ foo: 'bar' }, {}, Object.create({}), Object.create(null)]);
  shouldBeInvalidFor(isObject, ['', 'foo', undefined, new Map(), new Set()]);
});
