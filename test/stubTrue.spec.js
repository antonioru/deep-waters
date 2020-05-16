import stubTrue from '../src/_internals/stubTrue';

describe('stubTrue', () => {
  it('should be a function', () => expect(stubTrue).to.be.a('function'));
  it('should always return true', () => expect(stubTrue()).to.be.true);
});
