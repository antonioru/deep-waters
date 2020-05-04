import isSet from '../src/isSet';

describe('isSet', () => {
  it('should be a function', () => {
    expect(isSet).to.be.a('function');
  });

  it('should evaluate if the given value is of type Set', () => {
    expect(isSet(new Set())).to.be.true;

    expect(isSet(null)).to.be.false;
    expect(isSet(undefined)).to.be.false;
    expect(isSet(0)).to.be.false;
    expect(isSet(1)).to.be.false;
    expect(isSet('value')).to.be.false;
  });
});
