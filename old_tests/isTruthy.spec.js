import isTruthy from '../old_src/isTruthy';

describe('isTruthy', () => {
  it('should be a function', () => {
    expect(isTruthy).to.be.a('function');
  });

  it('should return true if the given value is truthy', () => {
    expect(isTruthy(true)).to.be.true;
    expect(isTruthy(1)).to.be.true;
    expect(isTruthy('hello')).to.be.true;
    expect(isTruthy([])).to.be.true;
    expect(isTruthy({})).to.be.true;
    expect(isTruthy([1, 2, 3])).to.be.true;
    expect(isTruthy([{ prop: true }])).to.be.true;
  });

  it('should return false for falsy values', () => {
    expect(isTruthy(false)).to.be.false;
    expect(isTruthy(0)).to.be.false;
    expect(isTruthy('')).to.be.false;
    expect(isTruthy(' ')).to.be.false;
    expect(isTruthy(null)).to.be.false;
    expect(isTruthy(undefined)).to.be.false;
    expect(isTruthy(NaN)).to.be.false;
  });
});
