import isPhone from '../src/isPhone';

describe('isPhone', () => {
  it('should be a function', () => {
    expect(isPhone).to.be.a('function');
  });

  it('should return true if (and only) the given string is a valid phone number', () => {
    const numbers = [
      '+44 7576 123456',
      '+91 444 741 4000',
      '+39 328 233 92323',
      '+1 (866) 582-2655',
    ];

    numbers.forEach((number) => {
      expect(isPhone(number)).to.be.true;
    });
  });

  it('should return false for everything else', () => {
    expect(isPhone('this string is not a valid phone number')).to.be.false;
    expect(isPhone(false)).to.be.false;
    expect(isPhone(null)).to.be.false;
    expect(isPhone(undefined)).to.be.false;
    expect(isPhone([])).to.be.false;
    expect(isPhone({})).to.be.false;
  });
});
