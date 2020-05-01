import contains from '../src/contains';

describe('contains', () => {
  it('should be a function', () => {
    expect(contains).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = contains('str');

    expect(result).to.be.a('function');
  });

  it('should return true if (and only) the given string contains the defined sub-string', () => {
    const hasBI = contains('beautiful interactions');

    expect(hasBI('this string contains beautiful interactions')).to.be.true;
  });

  it('should return false for everything else', () => {
    const hasBI = contains('beautiful interactions');

    expect(hasBI('this string does not contain the word')).to.be.false;
    expect(hasBI(false)).to.be.false;
    expect(hasBI(null)).to.be.false;
    expect(hasBI(undefined)).to.be.false;
    expect(hasBI([])).to.be.false;
    expect(hasBI({})).to.be.false;
  });
});
