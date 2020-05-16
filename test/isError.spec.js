import isError from '../src/isError';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isError', () => {
  shouldBeAValidator(isError, new Error('foo'));

  shouldBeValidFor(isError, [new Error('foo'), new Error()]);
  shouldBeInvalidFor(isError, [1, 0, '', 'foo', undefined, null, new Set(), new Map()]);
});
