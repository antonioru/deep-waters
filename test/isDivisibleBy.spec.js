import isDivisibleBy from '../src/isDivisibleBy';

describe('isDivisibleBy', () => {
  it('should be a function', () => {
    expect(isDivisibleBy).to.be.a('function');
  });

  it('should return a new function', () => {
    const by2 = isDivisibleBy(2);

    expect(by2).to.be.a('function');
  });

  it('should evaluate if the provided number is divisible by the given one', () => {
    const by2 = isDivisibleBy(2);

    expect(by2(2)).to.be.true;
    expect(by2(4)).to.be.true;
    expect(by2(6)).to.be.true;
    expect(by2(100)).to.be.true;
    expect(by2(5)).to.be.false;
    expect(by2(7)).to.be.false;
  });


  it('should return false for non numeric values', () => {
    const by2 = isDivisibleBy(2);

    expect(by2(false)).to.be.false;
    expect(by2([])).to.be.false;
    expect(by2(null)).to.be.false;
    expect(by2(undefined)).to.be.false;
    expect(by2({})).to.be.false;
    expect(by2('foo')).to.be.false;
  });
});
