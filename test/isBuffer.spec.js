import isBuffer from '../src/isBuffer';

// since this is just a shortcut to isUint8Array we only need to test it is a function
describe('isBuffer', () => {
  it('should be a function', () => {
    expect(isBuffer).to.be.a('function');
  });
});
