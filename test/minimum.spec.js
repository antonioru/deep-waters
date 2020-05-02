import minimum from '../src/minimum';

describe('minimum', () => {
  it('should be a function', () => {
    expect(minimum).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = minimum(5);

    expect(result).to.be.a('function');
  });

  it('should evaluate if the provided number is bigger than the defined minimum', () => {
    const atLeast5 = minimum(5);

    expect(atLeast5(5)).to.be.true;
    expect(atLeast5(5.01)).to.be.true;
    expect(atLeast5(10)).to.be.true;
    expect(atLeast5(-4)).to.be.false;
    expect(atLeast5(4.99)).to.be.false;
  });

  it('should return false for every other value', () => {
    const atLeast5 = minimum(5);

    expect(atLeast5(undefined)).to.be.false;
    expect(atLeast5([])).to.be.false;
    expect(atLeast5({})).to.be.false;
    expect(atLeast5({ length: 5 })).to.be.false;
    expect(atLeast5({ p: 1, p2: 1, p3: 1, p4: 1, p5: 1 })).to.be.false;
  });
});
