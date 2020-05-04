import isWeakMap from '../src/isWeakMap';

describe('isWeakMap', () => {
  it('should be a function', () => {
    expect(isWeakMap).to.be.a('function');
  });

  it('should evaluate if the given value is of type WeakMap', () => {
    expect(isWeakMap(new WeakMap())).to.be.true;

    expect(isWeakMap(null)).to.be.false;
    expect(isWeakMap(undefined)).to.be.false;
    expect(isWeakMap(0)).to.be.false;
    expect(isWeakMap(1)).to.be.false;
    expect(isWeakMap('value')).to.be.false;
  });
});
