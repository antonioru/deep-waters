import isEmail from '../src/isEmail';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';
import randomString from './utils/randomString';

const validEmails = [
  'antonio@provider.co.uk',
  'antonio@provider.com',
  'antonio@provider.it',
  'email@example.com',
  'firstname.lastname@example.com',
  'email@subdomain.example.com',
  'firstname+lastname@example.com',
  '“email”@example.com',
  '1234567890@example.com',
  'email@example-one.com',
  '_______@example.com',
  'email@example.name',
  'email@example.museum',
  'email@example.co.jp',
  'firstname-lastname@example.com',
  'much.“moreunusual”@example.com',
  'あいうえお@example.com',
  'email@example.web',
];

const invalidEmails = [
  '@provider.co.uk',
  'antonioprovider.com',
  'www@pro.vider@very.long.extentions',
  'plainaddress',
  '#@%^%#$@#$@#.com',
  '@example.com',
  'Joe Smith <email@example.com>',
  'email.example.com',
  'email@example@example.com',
  '.email@example.com',
  'email.@example.com',
  'email..email@example.com',
  'email@example.com (Joe Smith)',
  'email@example',
  'email@111.222.333.44444',
  'email@example..com',
  'Abc..123@example.com',
  'very.unusual.“@”.unusual.com@example.com',
  'very.“(),:;<>[]”.VERY.“very@\\ "very”.unusual@strange.example.com',
  ...Array.from({ length: 5 }).map(() => randomString()),
];

describe('isEmail', () => {
  shouldBeAValidator(isEmail, 'antonio@provider.co.uk');

  shouldBeValidFor(isEmail, validEmails);
  shouldBeInvalidFor(isEmail, [1, '', 'foo', {}, false, true, undefined, null, new Set(), new Map(), ...invalidEmails]);
});
