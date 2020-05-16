import isInt8Array from '../src/isInt8Array';

describe('isInt8Array', () => {
  it('should be a function', () => {
    expect(isInt8Array).to.be.a('function');
  });

  it('should evaluate if the given value is of type Int8Array', () => {
    expect(isInt8Array(new Int8Array([2, 4, 6]))).to.be.true;

    expect(isInt8Array(null)).to.be.false;
    expect(isInt8Array(undefined)).to.be.false;
    expect(isInt8Array(0)).to.be.false;
    expect(isInt8Array(1)).to.be.false;
    expect(isInt8Array('value')).to.be.false;
  });
});
