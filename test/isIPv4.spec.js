import isIPv4 from '../src/isIPv4';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';
import randomString from './utils/randomString';

const validIPs = [
  '0.0.0.0',
  '127.0.0.1',
  '30.30.30.30',
  '255.255.255.255',
  '123.134.231.213',
  '255.32.25.0',
  '123.142.224.0',
  '5.25.21.25',
  '55.12.2.98',
  '12.86.35.88',
];

const invalidIPs = [
  '25.10.122',
  '12.21.3.1222',
  '244.255.256.167.342',
  '256.255.255.255',
  '1.32..3.001.21',
  '-3.-25.0.255',
  ...Array.from({ length: 5 }).map(() => randomString()),
];

describe('isIPv4', () => {
  shouldBeAValidator(isIPv4, '0.0.0.0');

  shouldBeValidFor(isIPv4, validIPs);
  shouldBeInvalidFor(isIPv4, [1, '', 'foo', {}, false, true, undefined, null, new Set(), new Map(), ...invalidIPs]);
});
