import isUint8Array from '../src/isUint8Array';

describe('isUint8Array', () => {
  it('should be a function', () => {
    expect(isUint8Array).to.be.a('function');
  });

  it('should evaluate if the given value is of type Uint8Array', () => {
    expect(isUint8Array(new Uint8Array([2, 4, 6]))).to.be.true;

    expect(isUint8Array(null)).to.be.false;
    expect(isUint8Array(undefined)).to.be.false;
    expect(isUint8Array(0)).to.be.false;
    expect(isUint8Array(1)).to.be.false;
    expect(isUint8Array('value')).to.be.false;
  });
});
