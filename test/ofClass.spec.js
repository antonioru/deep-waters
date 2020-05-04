import ofClass from '../src/ofClass';

describe('ofClass', () => {
  it('should be a function', () => {
    expect(ofClass).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = ofClass('Date');

    expect(result).to.be.a('function');
  });

  it('should evaluate if the given values matches the defined class', () => {
    const isString = ofClass('String');

    expect(isString('hello')).to.be.true;
    expect(isString(null)).to.be.false;
    expect(isString({})).to.be.false;
    expect(isString(10)).to.be.false;

    const isArray = ofClass('Array');


    expect(isArray([])).to.be.true;
    expect(isArray([1, 2, 3])).to.be.true;
    expect(isArray(null)).to.be.false;
    expect(isArray({})).to.be.false;
    expect(isArray(10)).to.be.false;

    const isNull = ofClass('Null');

    expect(isNull({})).to.be.false;
    expect(isNull([])).to.be.false;
    expect(isNull(null)).to.be.true;
  });
});
