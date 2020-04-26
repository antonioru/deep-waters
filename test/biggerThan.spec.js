import biggerThan from '../src/biggerThan';

describe('biggerThan', () => {
  it('should be a function', () => {
    expect(biggerThan).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = biggerThan(5);

    expect(result).to.be.a('function');
  });

  it('should return true when the provided value is bigger than the defined one', () => {
    const biggerThan5 = biggerThan(5);

    expect(biggerThan5(6)).to.be.true;
    expect(biggerThan5(5)).to.be.false;
    expect(biggerThan5(0)).to.be.false;
    expect(biggerThan5(-5)).to.be.false;
  });

  it('should return false when the provided value is not a valid number', () => {
    const biggerThan5 = biggerThan(5);

    expect(biggerThan5(null)).to.be.false;
    expect(biggerThan5(undefined)).to.be.false;
    expect(biggerThan5([])).to.be.false;
    expect(biggerThan5([1, 2, 3])).to.be.false;
    expect(biggerThan5({})).to.be.false;
  });
});
