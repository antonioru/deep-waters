import arrayOf from '../src/arrayOf';
import every from '../src/every';

describe('arrayOf', () => {
  it('should be a function', () => {
    expect(arrayOf).to.be.a('function');
  });

  it('should be a semantic shortcut to every', () => {
    expect(arrayOf).to.equal(every);
  });
});
