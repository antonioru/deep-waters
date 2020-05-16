import isRespObject from '../../src/utils/isRespObject';

/* eslint-disable no-undef, no-unused-expressions */
const shouldBeAValidator = (fn, validValue, invalidValue = null) => {
  it('should be a function', () => {
    expect(fn).to.be.a('function');
  });

  it('should return a valid response object', () => {
    const validResponse = fn(validValue);
    const invalidResponse = fn(invalidValue);

    expect(isRespObject(validResponse)).to.be.true;
    expect(isRespObject(invalidResponse)).to.be.true;
  });

  it(`in case of a falsy response, should report the following error message: ${fn.defaultErrMsg}`, () => {
    const invalidResponse = fn(invalidValue);
    expect(invalidResponse).to.be.an('object').that.has.property('errors');
    expect(invalidResponse.errors[0]).to.equal(fn.defaultErrMsg);
  });
};

export default shouldBeAValidator;
