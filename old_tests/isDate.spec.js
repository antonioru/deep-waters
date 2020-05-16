import isDate from '../src/isDate';

describe('isDate', () => {
  it('should be a function', () => {
    expect(isDate).to.be.a('function');
  });

  it('should evaluate if the given value is an instance of Date', () => {
    expect(isDate(new Date())).to.be.true;

    expect(isDate(null)).to.be.false;
    expect(isDate(undefined)).to.be.false;
    expect(isDate(0)).to.be.false;
    expect(isDate(1)).to.be.false;
    expect(isDate('value')).to.be.false;
  });
});
