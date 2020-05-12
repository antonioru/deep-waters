import stubFalse from '../src/_utils/stubFalse';

describe('stubFalse', () => {
  it('should be a function', () => expect(stubFalse).to.be.a('function'));
  it('should always return false', () => expect(stubFalse()).to.be.false);
});
