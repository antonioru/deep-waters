import isBoolean from '../src/isBoolean';

describe('isBoolean', () => {
  it('should be a function', () => {
    expect(isBoolean).to.be.a('function');
  });

  it('should evaluate if the given value is a boolean', () => {
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;
    /* eslint-disable no-new-wrappers */
    expect(isBoolean(new Boolean(true))).to.be.true;
    expect(isBoolean(new Boolean(false))).to.be.true;
    /* eslint-enable no-new-wrappers */

    expect(isBoolean(null)).to.be.false;
    expect(isBoolean(undefined)).to.be.false;
    expect(isBoolean(0)).to.be.false;
    expect(isBoolean(1)).to.be.false;
    expect(isBoolean('value')).to.be.false;
  });
});
