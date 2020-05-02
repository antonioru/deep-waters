import maximum from '../src/maximum';

describe('maximum', () => {
  it('should be a function', () => {
    expect(maximum).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = maximum(5);

    expect(result).to.be.a('function');
  });

  it('should evaluate if the provided number is smaller than the defined maximum', () => {
    const smallerThan5 = maximum(5);

    expect(smallerThan5(1)).to.be.true;
    expect(smallerThan5(-2)).to.be.true;
    expect(smallerThan5(3.4232)).to.be.true;
    expect(smallerThan5(5)).to.be.true;
    expect(smallerThan5(5.01)).to.be.false;
    expect(smallerThan5(6)).to.be.false;
  });

  it('should return false for every other value', () => {
    const smallerThan5 = maximum(5);

    expect(smallerThan5(undefined)).to.be.false;
    expect(smallerThan5([])).to.be.false;
    expect(smallerThan5({})).to.be.false;
    expect(smallerThan5({ length: 5 })).to.be.false;
    expect(smallerThan5({ p: 1, p2: 1, p3: 1, p4: 1, p5: 1 })).to.be.false;
  });
});
