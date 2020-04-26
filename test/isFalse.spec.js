import isFalse from '../src/isFalse';

describe('isFalse', () => {
  it('should be a function', () => {
    expect(isFalse).to.be.a('function');
  });

  it('should evaluate if the given value is false', () => {
    expect(isFalse(true)).to.be.false;
    expect(isFalse(false)).to.be.true;
    expect(isFalse(null)).to.be.false;
    expect(isFalse(undefined)).to.be.false;
    expect(isFalse(0)).to.be.false;
    expect(isFalse('1')).to.be.false;
    expect(isFalse('value')).to.be.false;
  });
});
