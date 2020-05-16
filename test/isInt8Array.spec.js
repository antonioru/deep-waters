import isInt8Array from '../src/isInt8Array';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isInt8Array', () => {
  shouldBeAValidator(isInt8Array, new Int8Array(1));

  shouldBeValidFor(isInt8Array, [new Int8Array(1), new Int8Array(1).fill(1), new Int8Array(20).fill(1)]);
  shouldBeInvalidFor(isInt8Array, [1, 0, '', 'foo', undefined, null, new Set(), new Map()]);
});
