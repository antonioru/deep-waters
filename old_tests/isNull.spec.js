import isNull from '../src/isNull';

describe('isNull', () => {
  it('should be a function', () => {
    expect(isNull).to.be.a('function');
  });

  it('should evaluate if the given value is null', () => {
    expect(isNull(null)).to.be.true;
    expect(isNull(undefined)).to.be.false;
    expect(isNull(0)).to.be.false;
    expect(isNull('1')).to.be.false;
    expect(isNull('value')).to.be.false;
  });
});
