import isFunction from '../src/isFunction';

describe('isFunction', () => {
  it('should be a function', () => {
    expect(isFunction).to.be.a('function');
  });

  it('should evaluate if the given value is a function', () => {
    const noop = () => null;

    expect(isFunction(null)).to.be.false;
    expect(isFunction(undefined)).to.be.false;
    expect(isFunction(noop)).to.be.true;
    expect(isFunction(1)).to.be.false;
    expect(isFunction('value')).to.be.false;
  });
});
