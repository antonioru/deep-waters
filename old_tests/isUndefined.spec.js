import isUndefined from '../src/isUndefined';

describe('isUndefined', () => {
  it('should be a function', () => {
    expect(isUndefined).to.be.a('function');
  });

  it('should return true if (and only) the given value is undefined', () => {
    expect(isUndefined(undefined)).to.be.true;

    expect(isUndefined(null)).to.be.false;
    expect(isUndefined(0)).to.be.false;
    expect(isUndefined('1')).to.be.false;
    expect(isUndefined('value')).to.be.false;
  });
});
