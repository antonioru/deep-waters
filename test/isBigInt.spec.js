import isBigInt from '../src/isBigInt';

describe('isBigInt', () => {
  it('should be a function', () => {
    expect(isBigInt).to.be.a('function');
  });

  it('should evaluate if the given value is of type BigInt', () => {
    // eslint-disable-next-line no-undef
    expect(isBigInt(BigInt(Number.MAX_SAFE_INTEGER))).to.be.true;

    expect(isBigInt(null)).to.be.false;
    expect(isBigInt(undefined)).to.be.false;
    expect(isBigInt(0)).to.be.false;
    expect(isBigInt(1)).to.be.false;
    expect(isBigInt('value')).to.be.false;
  });
});
