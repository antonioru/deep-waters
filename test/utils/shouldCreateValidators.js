/* eslint-disable no-undef, no-unused-expressions */
import shouldBeAHigherOrderFunction from './shouldBeAHigherOrderFunction';

const shouldCreateValidators = (fn, thunkParam, { validParam, errorParam }) => {
  shouldBeAHigherOrderFunction(fn, thunkParam);

  it('the created validator should return a response', () => {
    const validator = fn(thunkParam);

    expect(validator(validParam)).to.be.an('object').that.has.property('valid', true);
    expect(validator(errorParam)).to.be.an('object').that.has.property('errors');
  });

  it('should allow to define a custom error message', () => {
    const customErr = 'foo';
    const validator = fn(thunkParam, customErr);
    const result = validator(errorParam);

    expect(result.errors).to.be.an('array').that.has.lengthOf(1);
    expect(result.errors[0]).to.equals(customErr);
  });
};

export default shouldCreateValidators;
