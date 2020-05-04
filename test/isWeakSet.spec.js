import isWeakSet from '../src/isWeakSet';

describe('isWeakSet', () => {
  it('should be a function', () => {
    expect(isWeakSet).to.be.a('function');
  });

  it('should evaluate if the given value is of type WeakSet', () => {
    expect(isWeakSet(new WeakSet())).to.be.true;

    expect(isWeakSet(null)).to.be.false;
    expect(isWeakSet(undefined)).to.be.false;
    expect(isWeakSet(0)).to.be.false;
    expect(isWeakSet(1)).to.be.false;
    expect(isWeakSet('value')).to.be.false;
  });
});
