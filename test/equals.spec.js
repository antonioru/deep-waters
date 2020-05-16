import equals from '../src/equals';
import shouldCreateValidators from './utils/shouldCreateValidators';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';

class Mock {
  constructor(n) {
    this.value = n;
  }

  toString() {
    return `${this.value}`;
  }
}

describe('equals', () => {
  shouldCreateValidators(equals, 'foo', {
    validParam: 'foo',
    errorParam: -1,
  });

  const date = new Date();
  shouldBeValidFor(equals(date), [date]);
  shouldBeValidFor(equals('foo'), ['foo']);
  shouldBeValidFor(equals(1), [1]);
  shouldBeValidFor(equals({}), [{}]);
  shouldBeValidFor(equals([]), [[]]);
  shouldBeValidFor(equals([1, 2, 3, {}]), [[1, 2, 3, {}]]);
  shouldBeValidFor(equals(Number.NaN), [Number.NaN]);
  shouldBeValidFor(equals({ prop: 1 }), [{ prop: 1 }]);
  shouldBeValidFor(equals({ prop: 1, deep: { deep: { prop: 2 } } }), [{ prop: 1, deep: { deep: { prop: 2 } } }]);
  shouldBeValidFor(equals(new Set([1, 2, 3])), [new Set([1, 2, 3])]);
  shouldBeValidFor(equals(new Set()), [new Set()]);
  shouldBeValidFor(equals(new Map([['foo', 1]])), [new Map([['foo', 1]])]);
  shouldBeValidFor(equals(null), [null]);
  shouldBeValidFor(equals(undefined), [undefined]);
  shouldBeValidFor(equals(/test/), [/test/, new RegExp(/test/)]);
  shouldBeValidFor(equals(new Mock(2)), [new Mock(2)]);

  shouldBeInvalidFor(equals({ prop: 1 }), [{ prop: 2 }]);
  shouldBeInvalidFor(equals({ prop: 1, b: 1 }), [{ prop: 2 }]);
  shouldBeInvalidFor(equals({ prop: 1, bar: 1 }), [{ foo: 'bar' }]);
  shouldBeInvalidFor(equals({ prop: 1 }), [{ foo: 1 }]);
  shouldBeInvalidFor(equals({}), [{ foo: 'bar' }]);
  shouldBeInvalidFor(equals([1, 2, 3]), [[1, 2, 2]]);
  shouldBeInvalidFor(equals([1]), [[1, 2, 3]]);
  shouldBeInvalidFor(equals(new Mock(4)), [new Mock(2)]);
  shouldBeInvalidFor(equals(/test/), [/foo/]);
  shouldBeInvalidFor(equals(new Set([1, 2])), [new Set([1, 2, 3])]);
  shouldBeInvalidFor(equals(new Set([1, 2, 3])), [new Set([1, 2, 1])]);
  shouldBeInvalidFor(equals(new Set([{}])), [new Set([{ prop: 1 }])]);
  shouldBeInvalidFor(equals(new Set()), [new Set([1, 2, 3])]);
  shouldBeInvalidFor(equals(new Map([['foo', 1], ['bar', 2]])), [new Map([['foo', 1]])]);
  shouldBeInvalidFor(equals(new Map([['foo', 1], ['bar', 2]])), [new Map([['foo', 2], ['bar', 2]])]);
  shouldBeInvalidFor(equals(new Map([['foo', 1]])), [new Map([['bar', 2]])]);
  shouldBeInvalidFor(equals(date), [new Date('2020-06-12')]);
  shouldBeInvalidFor(equals({}), [1, 0, undefined, null, new Set(), new Map()]);
  shouldBeInvalidFor(equals(1), ['1', 'foo', '', undefined, null, new Set(), new Map()]);
  shouldBeInvalidFor(equals([]), ['1', 'foo', '', undefined, null, 1, 0, new Map()]);
  shouldBeInvalidFor(equals('foo'), ['1', '', undefined, null, 1, 0, new Map()]);
});
