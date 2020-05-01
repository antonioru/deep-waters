import lessThan from '../src/numbers/lessThan';

describe('lessThan', () => {
  it('should be a function', () => {
    expect(lessThan).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = lessThan(5);

    expect(result).to.be.a('function');
  });

  it('should return true when the provided value is less than the defined one', () => {
    const lessThan5 = lessThan(5);

    expect(lessThan5(4)).to.be.true;
    expect(lessThan5(5)).to.be.false;
    expect(lessThan5(6)).to.be.false;
    expect(lessThan5(-5)).to.be.true;
  });

  it('should return false when the provided value is not a valid number', () => {
    const lessThan5 = lessThan(5);

    expect(lessThan5(null)).to.be.false;
    expect(lessThan5(undefined)).to.be.false;
    expect(lessThan5([])).to.be.false;
    expect(lessThan5([1, 2, 3])).to.be.false;
    expect(lessThan5({})).to.be.false;
  });
});
