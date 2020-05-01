import isIP from '../src/strings/isIP';

describe('isIP', () => {
  it('should be a function', () => {
    expect(isIP).to.be.a('function');
  });

  it('should evaluate if the given value is a valid IP address', () => {
    expect(isIP('0.0.0.0')).to.be.true;
    expect(isIP('127.0.0.1')).to.be.true;
    expect(isIP('30.30.30.30')).to.be.true;
    expect(isIP('255.255.255.255')).to.be.true;
    expect(isIP('1200:0000:AB00:1234:0000:2552:7777:1313')).to.be.true;
    expect(isIP('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A')).to.be.true;

    expect(isIP('256.255.255.255')).to.be.false;
    expect(isIP('foo')).to.be.false;
  });

  it('should return false for everything else', () => {
    expect(isIP(null)).to.be.false;
    expect(isIP(undefined)).to.be.false;
    expect(isIP(10)).to.be.false;
    expect(isIP([])).to.be.false;
    expect(isIP({})).to.be.false;
  });
});
