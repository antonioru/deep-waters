import isBoolean from '../src/isBoolean';

describe('isBoolean', () => {
  it('should be a function', () => {
    expect(isBoolean).to.be.a('function');
  });

  it('should evaluate if the given value is a boolean', () => {
    expect(isBoolean(null)).to.be.false;
    expect(isBoolean(undefined)).to.be.false;
    expect(isBoolean(0)).to.be.false;
    expect(isBoolean(1)).to.be.false;
    expect(isBoolean('value')).to.be.false;
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;
  });
});
