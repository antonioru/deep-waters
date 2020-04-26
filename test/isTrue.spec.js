import isTrue from '../src/isTrue';

describe('isTrue', () => {
  it('should be a function', () => {
    expect(isTrue).to.be.a('function');
  });

  it('should return true if (and only) the given value is true', () => {
    expect(isTrue(true)).to.be.true;

    expect(isTrue(false)).to.be.false;
    expect(isTrue(null)).to.be.false;
    expect(isTrue(undefined)).to.be.false;
    expect(isTrue(0)).to.be.false;
    expect(isTrue('1')).to.be.false;
    expect(isTrue('value')).to.be.false;
  });
});
