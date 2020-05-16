import isEmptyString from '../old_src/isEmptyString';

describe('isEmptyString', () => {
  it('should be a function', () => {
    expect(isEmptyString).to.be.a('function');
  });

  it('should return true if the given value is an empty string', () => {
    expect(isEmptyString('')).to.be.true;
    expect(isEmptyString(' ')).to.be.true;
    expect(isEmptyString('      ')).to.be.true;
  });

  it('should return false for non empty strings', () => {
    expect(isEmptyString('not empty')).to.be.false;
  });

  it('should return false for everything else', () => {
    expect(isEmptyString(undefined)).to.be.false;
    expect(isEmptyString(null)).to.be.false;
    expect(isEmptyString({ prop: false })).to.be.false;
    expect(isEmptyString({})).to.be.false;
    expect(isEmptyString([])).to.be.false;
    expect(isEmptyString(123)).to.be.false;
    expect(isEmptyString(0)).to.be.false;
    expect(isEmptyString(false)).to.be.false;
    expect(isEmptyString(true)).to.be.false;
  });
});
