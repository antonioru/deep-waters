import contains from '../old_src/contains';

describe('contains', () => {
  it('should be a function', () => {
    expect(contains).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = contains('str');

    expect(result).to.be.a('function');
  });

  it('should return true if the given string contains the defined sub-string', () => {
    const hasBI = contains('beautiful interactions');

    expect(hasBI('this string contains beautiful interactions')).to.be.true;
    expect(hasBI('foo')).to.be.false;
  });


  it('should evaluate if the defined number or string is contained in the given array', () => {
    const hasNumber = contains(3);
    const hasHello = contains('hello');

    expect(hasNumber([1, 2, 3])).to.be.true;
    expect(hasNumber([1, 2, 4])).to.be.false;
    expect(hasHello([1, 2, 3, 'hello'])).to.be.true;
    expect(hasHello([1, 2, 3])).to.be.false;
  });

  it('should evaluate if the defined function is contained in the given array', () => {
    const fn = () => null;
    const hasFn = contains(fn);

    expect(hasFn([1, 2, 3, fn])).to.be.true;
    expect(hasFn([1, 2, 3])).to.be.false;
  });

  it('should evaluate if the defined symbol is contained in the given array', () => {
    const symbol = Symbol('foo');
    const hasSymbol = contains(symbol);

    expect(hasSymbol([1, 2, 3, symbol])).to.be.true;
    expect(hasSymbol([1, 2, 3])).to.be.false;
  });

  it('should return true if the given object equals one contained in the defined array', () => {
    const hasObj = contains({ prop: 1, deep: { foo: 'foo' }, n: 10 });

    expect(hasObj([1, 2, { prop: 1, deep: { foo: 'foo' }, n: 10 }])).to.be.true;
    expect(hasObj([1, 2, 3])).to.be.false;
  });

  it('should return false for everything else', () => {
    const hasBI = contains('beautiful interactions');

    expect(hasBI('this string does not contain the word')).to.be.false;
    expect(hasBI(false)).to.be.false;
    expect(hasBI(null)).to.be.false;
    expect(hasBI(undefined)).to.be.false;
    expect(hasBI({})).to.be.false;
    expect(hasBI([])).to.be.false;


    const hasObj = contains({ prop: 1, deep: { foo: 'foo' }, n: 10 });

    expect(hasObj('this string does not contain the word')).to.be.false;
    expect(hasObj(false)).to.be.false;
    expect(hasObj(null)).to.be.false;
    expect(hasObj({})).to.be.false;
    expect(hasObj({})).to.be.false;
    expect(hasObj([])).to.be.false;
  });
});
