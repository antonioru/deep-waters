import compose from '../src/compose';
import and from '../src/and';

describe('compose', () => {
  it('should be a function', () => {
    expect(compose).to.be.a('function');
  });

  it('should be a semantic shortcut to and', () => {
    expect(compose).to.equal(and);
  });
});
