import isBigInt from '../src/isBigInt';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

const { BigInt } = global;

describe('isBigInt', () => {
  shouldBeAValidator(isBigInt, BigInt(100));

  shouldBeValidFor(isBigInt, [BigInt(0), BigInt(1), BigInt(Number.MIN_SAFE_INTEGER), BigInt(Number.MAX_SAFE_INTEGER)]);
  shouldBeInvalidFor(isBigInt, [1, 0, '', 'foo', undefined, null, new Set(), new Map()]);
});
