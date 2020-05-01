import isZero from '../src/numbers/isZero';

describe('isZero', () => {
  it('should be a function', () => {
    expect(isZero).to.be.a('function');
  });

  it('should return true if (and only) the given value is zero', () => {
    expect(isZero(0)).to.be.true;

    expect(isZero(null)).to.be.false;
    expect(isZero(undefined)).to.be.false;
    expect(isZero('1')).to.be.false;
    expect(isZero('value')).to.be.false;
  });
});
