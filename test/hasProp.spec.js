import hasProp from '../src/hasProp';

describe('hasProp', () => {
  it('should be a function', () => {
    expect(hasProp).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = hasProp('prop');

    expect(result).to.be.a('function');
  });

  it('should return true if the provided object has the defined property', () => {
    const hasLength = hasProp('length');

    expect(hasLength({ length: true })).to.be.true;
    expect(hasLength('string')).to.be.true;
    expect(hasLength([])).to.be.true;
  });

  it('should return false elsewhere', () => {
    const hasLength = hasProp('length');

    expect(hasLength({})).to.be.false;
    expect(hasLength(10)).to.be.false;
    expect(hasLength(null)).to.be.false;
    expect(hasLength(undefined)).to.be.false;
  });
});
