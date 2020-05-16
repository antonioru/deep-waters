import isDateFormat from '../old_src/isDateFormat';

describe('isDateFormat', () => {
  it('should be a function', () => {
    expect(isDateFormat).to.be.a('function');
  });

  it('should return true if the given value is a valid date string', () => {
    expect(isDateFormat('12-02-20')).to.be.true;
    expect(isDateFormat('12-12-2020')).to.be.true;
    expect(isDateFormat('2/1/20')).to.be.true;
  });

  it('should return false for non valid date strings', () => {
    expect(isDateFormat('not valid')).to.be.false;
  });

  it('should return false for everything else', () => {
    expect(isDateFormat(undefined)).to.be.false;
    expect(isDateFormat(null)).to.be.false;
    expect(isDateFormat({ prop: false })).to.be.false;
    expect(isDateFormat({})).to.be.false;
    expect(isDateFormat([])).to.be.false;
    expect(isDateFormat(123)).to.be.false;
    expect(isDateFormat(0)).to.be.false;
    expect(isDateFormat(false)).to.be.false;
    expect(isDateFormat(true)).to.be.false;
  });
});
