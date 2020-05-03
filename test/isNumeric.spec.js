import isNumeric from '../src/isNumeric';

describe('isNumeric', () => {
  it('should be a function', () => {
    expect(isNumeric).to.be.a('function');
  });

  it('should evaluate if the given string is of a valid numeric string', () => {
    expect(isNumeric('1')).to.be.true;
    expect(isNumeric('200')).to.be.true;
    expect(isNumeric(200)).to.be.false;

    expect(isNumeric(null)).to.be.false;
    expect(isNumeric(undefined)).to.be.false;
    expect(isNumeric(0)).to.be.false;
    expect(isNumeric(-1)).to.be.false;
    expect(isNumeric({})).to.be.false;
    expect(isNumeric([])).to.be.false;
  });
});
