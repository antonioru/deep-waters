import isRegExp from '../src/isRegExp';

describe('isRegExp', () => {
  it('should be a function', () => {
    expect(isRegExp).to.be.a('function');
  });

  it('should evaluate if the given value is a regexp', () => {
    expect(isRegExp(/^39$/)).to.be.true;
    expect(isRegExp(new RegExp(/^39$/))).to.be.true;

    expect(isRegExp(null)).to.be.false;
    expect(isRegExp(undefined)).to.be.false;
    expect(isRegExp(0)).to.be.false;
    expect(isRegExp(1)).to.be.false;
    expect(isRegExp('value')).to.be.false;
  });
});
