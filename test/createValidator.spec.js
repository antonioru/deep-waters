import createValidator from '../src/utils/createValidator';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';
import isRespObject from '../src/utils/isRespObject';

describe('createValidator', () => {
  shouldBeAHigherOrderFunction(createValidator);

  it('should return a new memoized validator', () => {
    const spy = sinon.spy();
    const fn = (v) => {
      spy(v);
      return v > 10;
    };
    const validator = createValidator(fn, 'error');
    let result = validator(2);

    expect(isRespObject(result)).to.be.true;
    expect(result.valid).to.be.false;
    expect(result.errors).to.deep.equal(['error']);
    expect(spy.calledOnce).to.be.true;

    validator(2);
    validator(2);
    validator(2);

    expect(spy.calledOnce).to.be.true;

    result = validator(11);
    expect(result.valid).to.be.true;
    expect(result).to.not.have.key('errors');
    expect(spy.calledOnce).to.be.false;
    expect(spy.calledTwice).to.be.true;

    const validator2 = createValidator(fn, () => ['Err1', 'Err2']);
    const result2 = validator2(2);

    expect(isRespObject(result)).to.be.true;
    expect(result2.valid).to.be.false;
    expect(result2.errors).to.deep.equal(['Err1', 'Err2']);
  });

  it('the created validator return a response object', () => {
    const validator = createValidator((v) => v > 10, 'Err1');
    const result1 = validator(1);
    const result2 = validator(11);

    expect(result1).to.be.an('object').that.has.property('valid', false);
    expect(result1).to.have.property('errors');
    expect(result1.errors).to.deep.equal(['Err1']);

    expect(result2).to.be.an('object').that.has.property('valid', true);
    expect(result2).to.not.have.property('errors');
  });

  it('should be able to merge responses from other validators', () => {
    const validator1 = createValidator((v) => v > 10, 'Err1');
    const validator = createValidator(validator1, 'Err2');
    const result1 = validator(1);
    const result2 = validator(11);

    expect(result1).to.be.an('object').that.has.property('valid', false);
    expect(result1).to.have.property('errors');
    expect(result1.errors).to.deep.equal(['Err2', 'Err1']);

    expect(result2).to.be.an('object').that.has.property('valid', true);
    expect(result2).to.not.have.property('errors');
  });

  it('should expose the error message as property of the returned function only in test env.', () => {
    const currentEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'something else';
    const validator = createValidator((v) => v > 10, 'Err1');

    expect(validator.defaultErrMsg).to.not.exist;

    process.env.NODE_ENV = currentEnv;
  });
});
