import isObject from '../src/isObject';

describe('isObject', () => {
  it('should be a function', () => {
    expect(isObject).to.be.a('function');
  });

  it('should return true if the given value is an object', () => {
    expect(isObject({})).to.be.true;
    expect(isObject({ obj: true })).to.be.true;
    expect(isObject({ obj: true, foo: { obj: true } })).to.be.true;
  });

  it('should return false for everything else', () => {
    expect(isObject(undefined)).to.be.false;
    expect(isObject(null)).to.be.false;
    expect(isObject(123)).to.be.false;
    expect(isObject(0)).to.be.false;
    expect(isObject(false)).to.be.false;
    expect(isObject(true)).to.be.false;
  });
});
