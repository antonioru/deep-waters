import isError from '../src/isError';

describe('isError', () => {
  it('should be a function', () => {
    expect(isError).to.be.a('function');
  });

  it('should evaluate if the given value is of type Error', () => {
    expect(isError(new Error('foo'))).to.be.true;

    expect(isError(null)).to.be.false;
    expect(isError(undefined)).to.be.false;
    expect(isError(0)).to.be.false;
    expect(isError(1)).to.be.false;
    expect(isError('value')).to.be.false;
  });
});
