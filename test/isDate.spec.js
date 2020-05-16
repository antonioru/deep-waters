import isDate from '../src/isDate';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAValidator from './utils/shouldBeAValidator';

describe('isDate', () => {
  shouldBeAValidator(isDate, new Date());

  shouldBeValidFor(isDate, [new Date()]);
  shouldBeInvalidFor(isDate, [1, 0, '', 'foo', undefined, null, new Set(), new Map()]);
});
