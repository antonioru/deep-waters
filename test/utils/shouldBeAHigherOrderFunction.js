/* eslint-disable no-undef, no-unused-expressions */
const shouldBeAHigherOrderFunction = (fn, ...args) => {
  it('should be a function', () => {
    expect(fn).to.be.a('function');
  });

  it('should be a higher order function', () => {
    const response = fn(...args);

    expect(response).to.be.a('function');
  });
};

export default shouldBeAHigherOrderFunction;
