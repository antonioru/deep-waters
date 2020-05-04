import arrayOf from '../src/arrayOf';

// since this is just a shortcut to every we only need to test it is a function
describe('arrayOf', () => {
  it('should be a function', () => {
    expect(arrayOf).to.be.a('function');
  });
});
