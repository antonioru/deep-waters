import isNumber from '../src/numbers/isNumber';

describe('isNumber', () => {
  it('should be a function', () => {
    expect(isNumber).to.be.a('function');
  });

  it('should evaluate if the given value is a number', () => {
    expect(isNumber(null)).to.be.false;
    expect(isNumber(undefined)).to.be.false;
    expect(isNumber(0)).to.be.true;
    expect(isNumber(1)).to.be.true;
    expect(isNumber('value')).to.be.false;
  });
});
