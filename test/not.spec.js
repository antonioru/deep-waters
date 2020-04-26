import not from '../src/not';

describe('not', () => {
  it('should be a function', () => {
    expect(not).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = not(() => true);

    expect(result).to.be.a('function');
  });

  it('the returned function should return the opposite of what its first parameter returns', () => {
    const stubTrue = () => true;
    const stubFalse = () => false;
    const isNotValid = not(stubTrue);
    const isValid = not(stubFalse);

    expect(isNotValid()).to.be.false;
    expect(isValid()).to.be.true;
  });
});
