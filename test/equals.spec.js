import equals from '../src/equals';

describe('equals', () => {
  it('should be a function', () => {
    expect(equals).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = equals('prop');

    expect(result).to.be.a('function');
  });


  it('should equal primitive values', () => {
    const isHello = equals('hello');

    expect(isHello('hello')).to.be.true;
    expect(isHello('lorem')).to.be.false;

    const is10 = equals(10);

    expect(is10(10)).to.be.true;

    const fn = () => null;
    const isFn = equals(fn);

    expect(isFn(fn)).to.be.true;
  });

  it('should equal dates', () => {
    const date = new Date();
    const isDate = equals(date);

    expect(isDate(date)).to.be.true;
  });

  it('should equal objects', () => {
    const fn = () => null;

    const isObj = equals({
      prop: 1,
      prop2: 2,
      propStr: 'hello',
      prop3: { nested: { object: true, omg: { deep: { prop: 1, prop2: 2 } } } },
      propFn: fn,
      arr: [1, 2, 3, 4, 5, 6, { prop: 1 }],
    });

    expect(isObj({
      prop: 1,
      prop2: 2,
      propStr: 'hello',
      prop3: { nested: { object: true, omg: { deep: { prop: 1, prop2: 2 } } } },
      propFn: fn,
      arr: [1, 2, 3, 4, 5, 6, { prop: 1 }],
    })).to.be.true;
  });

  it('should equal arrays', () => {
    const isArr = equals([1, 2, 3, 4, 'hello', { prop: 1 }]);

    expect(isArr([1, 2, 3, 4, 'hello', { prop: 1 }])).to.be.true;
  });
});
