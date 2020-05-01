import isIPv6 from '../src/isIPv6';

describe('isIPv6', () => {
  it('should be a function', () => {
    expect(isIPv6).to.be.a('function');
  });

  it('should evaluate if the given value is a valid IPv6 string', () => {
    expect(isIPv6('1200:0000:AB00:1234:0000:2552:7777:1313')).to.be.true;
    expect(isIPv6('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A')).to.be.true;

    expect(isIPv6('256.255.255.255')).to.be.false;
    expect(isIPv6('foo')).to.be.false;
  });

  it('should return false for everything else', () => {
    expect(isIPv6(null)).to.be.false;
    expect(isIPv6(undefined)).to.be.false;
    expect(isIPv6(10)).to.be.false;
    expect(isIPv6([])).to.be.false;
    expect(isIPv6({})).to.be.false;
  });
});
