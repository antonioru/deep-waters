import isMap from '../src/isMap';

describe('isMap', () => {
  it('should be a function', () => {
    expect(isMap).to.be.a('function');
  });

  it('should evaluate if the given value is of type Map', () => {
    expect(isMap(new Map())).to.be.true;

    expect(isMap(null)).to.be.false;
    expect(isMap(undefined)).to.be.false;
    expect(isMap(0)).to.be.false;
    expect(isMap(1)).to.be.false;
    expect(isMap('value')).to.be.false;
  });
});
