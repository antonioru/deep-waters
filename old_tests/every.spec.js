import every from '../src/every';
import isNumber from '../src/isNumber';

describe('every', () => {
  it('should be a function', () => {
    expect(every).to.be.a('function');
  });

  it('should return a new function', () => {
    const everyItemIsNumber = every(isNumber);

    expect(everyItemIsNumber).to.be.a('function');
  });

  it('should return true if (and only) every item of the given array is valid for the given validator', () => {
    const everyItemIsNumber = every(isNumber);

    expect(everyItemIsNumber([0, 1, 2, 3, 4, 4.5])).to.be.true;
    expect(everyItemIsNumber(['string', 1, 2, 3, 4, 4.5])).to.be.false;
  });

  it('should return false for everything else', () => {
    const everyItemIsNumber = every(isNumber);

    expect(everyItemIsNumber('lorem ipsum')).to.be.false;
    expect(everyItemIsNumber(false)).to.be.false;
    expect(everyItemIsNumber(null)).to.be.false;
    expect(everyItemIsNumber(undefined)).to.be.false;
    expect(everyItemIsNumber({})).to.be.false;
  });

  it('should return false when an invalid validator is passed', () => {
    const what = every(null);

    expect(what('lorem ipsum')).to.be.false;
  });
});
