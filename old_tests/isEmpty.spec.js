import isEmpty from '../old_src/isEmpty';

describe('isEmpty', () => {
  it('should be a function', () => {
    expect(isEmpty).to.be.a('function');
  });

  it('should return true if an empty string is provided', () => {
    expect(isEmpty('')).to.be.true;
    expect(isEmpty(' ')).to.be.true;
    expect(isEmpty('no')).to.be.false;
  });

  it('should return true if an empty array is provided', () => {
    expect(isEmpty([])).to.be.true;
    expect(isEmpty([0])).to.be.false;
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  it('should return true if an empty object is provided', () => {
    expect(isEmpty({})).to.be.true;
  });
});
