import ofType from '../src/ofType';
import shouldCreateValidators from './utils/shouldCreateValidators';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';

describe('ofType', () => {
  shouldCreateValidators(ofType, 'String', {
    validParam: 'foo',
    errorParam: -1,
  });

  shouldBeValidFor(ofType('String'), ['foo', '']);
  shouldBeValidFor(ofType('Number'), [1, -1, 0, Infinity, Number.MAX_SAFE_INTEGER]);
  shouldBeValidFor(ofType('Set'), [new Set(), new Set([1, 2, 3])]);

  shouldBeInvalidFor(ofType('String'), [1, 0, undefined, null, new Set(), new Map()]);
  shouldBeInvalidFor(ofType('Number'), ['1', 'foo', '', undefined, null, new Set(), new Map()]);
  shouldBeInvalidFor(ofType('Set'), ['1', 'foo', '', undefined, null, 1, 0, new Map()]);
});
