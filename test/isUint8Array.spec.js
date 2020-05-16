import isUint8Array from '../src/isUint8Array';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isUint8Array', () => {
  shouldBeAValidator(isUint8Array, new Uint8Array(1));

  shouldBeValidFor(isUint8Array, [new Uint8Array(1), new Uint8Array(1).fill(1), new Uint8Array(20).fill(1)]);
  shouldBeInvalidFor(isUint8Array, [1, 0, '', 'foo', undefined, null, new Set(), new Map()]);
});
