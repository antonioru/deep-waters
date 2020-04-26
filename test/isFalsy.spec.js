import isFalsy from '../src/isFalsy';

describe('isFalsy', () => {
  it('should be a function', () => {
    expect(isFalsy).to.be.a('function');
  });

  it('should return true if the given value is falsy', () => {
    expect(isFalsy(false)).to.be.true;
    expect(isFalsy(0)).to.be.true;
    expect(isFalsy('')).to.be.true;
    expect(isFalsy(' ')).to.be.true;
    expect(isFalsy(null)).to.be.true;
    expect(isFalsy(undefined)).to.be.true;
    expect(isFalsy(NaN)).to.be.true;
  });

  it('should return false for truthy values', () => {
    expect(isFalsy('not empty')).to.be.false;
    expect(isFalsy(1)).to.be.false;
  });

  it('should return false for everything else', () => {
    expect(isFalsy({ prop: false })).to.be.false;
    expect(isFalsy({})).to.be.false;
    expect(isFalsy([])).to.be.false;
    expect(isFalsy(123)).to.be.false;
  });
});
