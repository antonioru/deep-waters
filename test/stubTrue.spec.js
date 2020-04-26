import stubTrue from '../src/utils/stubTrue';

describe('stubTrue', () => {
  it('should be a function', () => expect(stubTrue).to.be.a('function'));
  it('should always return true', () => expect(stubTrue()).to.be.true);
});
