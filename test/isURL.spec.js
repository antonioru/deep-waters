import isURL from '../src/strings/isURL';

describe('isURL', () => {
  it('should be a function', () => {
    expect(isURL).to.be.a('function');
  });

  it('should return true if the given value is a valid URL', () => {
    expect(isURL('https://www.test.it')).to.be.true;
    expect(isURL('http://www.test.it')).to.be.true;
    expect(isURL('www.test.it')).to.be.true;
    expect(isURL('www.test.it/')).to.be.true;
    expect(isURL('www.test.it/page/?foo=bar&something')).to.be.true;
    expect(isURL('test.it')).to.be.true;
  });

  it('should return false for everything else', () => {
    expect(isURL(false)).to.be.false;
    expect(isURL(0)).to.be.false;
    expect(isURL('')).to.be.false;
    expect(isURL(' ')).to.be.false;
    expect(isURL(null)).to.be.false;
    expect(isURL(undefined)).to.be.false;
    expect(isURL(NaN)).to.be.false;
    expect(isURL('test')).to.be.false;
  });
});
