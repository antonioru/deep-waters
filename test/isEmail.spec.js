import isEmail from '../src/strings/isEmail';

describe('isEmail', () => {
  it('should be a function', () => {
    expect(isEmail).to.be.a('function');
  });

  it('should return true if the given value is a valid email', () => {
    expect(isEmail('antonio@provider.it')).to.be.true;
    expect(isEmail('my.ownsite@ourearth.org')).to.be.true;
    expect(isEmail('mysite@you.me.net')).to.be.true;
  });

  it('should return false for everything else', () => {
    expect(isEmail(false)).to.be.false;
    expect(isEmail(0)).to.be.false;
    expect(isEmail('')).to.be.false;
    expect(isEmail(' ')).to.be.false;
    expect(isEmail(null)).to.be.false;
    expect(isEmail(undefined)).to.be.false;
    expect(isEmail(NaN)).to.be.false;
    expect(isEmail('test')).to.be.false;
  });
});
