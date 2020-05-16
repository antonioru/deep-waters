import isPhone from '../src/isPhone';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

const validPhones = [
  '+44 7576 123456',
  '+91 444 741 4000',
  '+39 328 233 92323',
  '+1 (866) 582-2655',
];

const invalidPhones = [
  '+(1234542',
  '*1234431',
];

describe('isPhone', () => {
  shouldBeAValidator(isPhone, '+44 7576 112233');

  shouldBeValidFor(isPhone, validPhones);
  shouldBeInvalidFor(isPhone, invalidPhones);
  shouldBeInvalidFor(isPhone, [1, 0, '', 'foo', undefined, new Map(), new Set()]);
});
