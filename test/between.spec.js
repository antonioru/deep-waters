import between from '../src/between';

describe('between', () => {
  it('should be a function', () => {
    expect(between).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = between(5);

    expect(result).to.be.a('function');
  });

  it('should return true when the provided value is between than the defined ones', () => {
    const between5And10 = between(5)(10);

    expect(between5And10(6)).to.be.true;
    expect(between5And10(5.3)).to.be.true;
    expect(between5And10(0)).to.be.false;
    expect(between5And10(-5)).to.be.false;
  });

  it('should return false when the provided value is not a valid number', () => {
    const between5And10 = between(5)(10);

    expect(between5And10(null)).to.be.false;
    expect(between5And10(undefined)).to.be.false;
    expect(between5And10([])).to.be.false;
    expect(between5And10([1, 2, 3])).to.be.false;
    expect(between5And10({})).to.be.false;
  });
});
