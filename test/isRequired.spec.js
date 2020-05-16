import isRequired from '../src/isRequired';
import isTruthy from '../src/isTruthy';

describe('isRequired', () => {
  it('should be a function', () => {
    expect(isRequired).to.be.a('function');
  });

  it('should be a semantic shortcut to isTruthy', () => {
    expect(isRequired).to.equal(isTruthy);
  });
});
