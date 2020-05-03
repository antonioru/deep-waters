import isSymbol from '../src/isSymbol';

describe('isSymbol', () => {
  it('should be a function', () => {
    expect(isSymbol).to.be.a('function');
  });

  it('should evaluate if the given value is of type symbol', () => {
    expect(isSymbol(Symbol('1'))).to.be.true;
    expect(isSymbol(Symbol(200))).to.be.true;

    expect(isSymbol(null)).to.be.false;
    expect(isSymbol(undefined)).to.be.false;
    expect(isSymbol(0)).to.be.false;
    expect(isSymbol('1')).to.be.false;
    expect(isSymbol('value')).to.be.false;
    expect(isSymbol({})).to.be.false;
    expect(isSymbol([])).to.be.false;
  });
});
