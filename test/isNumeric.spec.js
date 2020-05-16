import isNumeric from '../src/isNumeric';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isNumeric', () => {
  shouldBeAValidator(isNumeric, '100');

  shouldBeValidFor(isNumeric, ['1', '+1', '1.2', '1.42322', '0', '-21', '-12.2']);
  shouldBeInvalidFor(isNumeric, [1, '', 'foo', {}, [], false, true, undefined, null, new Set(), new Map(), () => null]);
});
