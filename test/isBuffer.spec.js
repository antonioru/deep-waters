import isBuffer from '../src/isBuffer';
import isUint8Array from '../src/isUint8Array';

describe('isBuffer', () => {
  it('should be a function', () => {
    expect(isBuffer).to.be.a('function');
  });

  it('should be a semantic shortcut to isUint8Array', () => {
    expect(isBuffer).to.equal(isUint8Array);
  });
});
