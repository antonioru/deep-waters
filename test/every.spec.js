import every from '../src/every';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldCreateValidators from './utils/shouldCreateValidators';
import isNumber from '../src/isNumber';
import isString from '../src/isString';
import or from '../src/or';

describe('every', () => {
  shouldCreateValidators(every, (value) => value > 0, {
    validParam: [1, 2, 3],
    errorParam: [-3, -2 - 1],
  });

  shouldBeValidFor(every(isNumber), [[1, 2, 3, 4, 5, 6, 7], [0, -1, Number.MAX_SAFE_INTEGER]]);
  shouldBeValidFor(every(isString), [['foo', 'bar', ''], [String('foo'), String('bar'), String('')]]);
  shouldBeValidFor(every(or(isString, isNumber)), [['foo', 1, 2], [2, String('foo'), String('bar')]]);
  shouldBeValidFor(every((v) => v > 10), [[11, 12, 13, 14], [15, 16, 17, 18]]);

  shouldBeInvalidFor(every(isNumber), [null, undefined, 10, 'foo', Symbol('f'), new Set([1, 2, 3])]);
  shouldBeInvalidFor(every(isNumber), [[1, 2, 3, 'foo'], ['foo', 1, 2, null]]);
  shouldBeInvalidFor(every(isString), [[1, 2, 3, 4], [{}, [], null]]);
  shouldBeInvalidFor(every((v) => v > 10), [[1, 2, 3]]);
});
