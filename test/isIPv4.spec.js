import isIPv4 from '../src/isIPv4';

describe('isIPv4', () => {
  it('should be a function', () => {
    expect(isIPv4).to.be.a('function');
  });

  it('should evaluate if the given value is a valid IPv4 string', () => {
    expect(isIPv4('0.0.0.0')).to.be.true;
    expect(isIPv4('127.0.0.1')).to.be.true;
    expect(isIPv4('30.30.30.30')).to.be.true;
    expect(isIPv4('255.255.255.255')).to.be.true;

    expect(isIPv4('25.10.122')).to.be.false;
    expect(isIPv4('256.255.255.255')).to.be.false;
    expect(isIPv4('foo')).to.be.false;
  });

  it('should return false for everything else', () => {
    expect(isIPv4(null)).to.be.false;
    expect(isIPv4(undefined)).to.be.false;
    expect(isIPv4(10)).to.be.false;
    expect(isIPv4([])).to.be.false;
    expect(isIPv4({})).to.be.false;
  });
});
