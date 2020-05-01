import isString from '../src/strings/isString';

describe('isString', () => {
  it('should be a function', () => {
    expect(isString).to.be.a('function');
  });

  it('should evaluate if the given value is a string', () => {
    expect(isString(null)).to.be.false;
    expect(isString(undefined)).to.be.false;
    expect(isString(0)).to.be.false;
    expect(isString('1')).to.be.true;
    expect(isString('value')).to.be.true;
  });
});
