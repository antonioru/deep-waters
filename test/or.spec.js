import or from '../src/or';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';
import createValidator from '../src/utils/createValidator';
import { stubTrue, stubFalse } from '../src/utils/_internals';

describe('or', () => {
  shouldBeAHigherOrderFunction(or, stubTrue, stubFalse);

  it('should compose the boolean responses from the received validators', () => {
    const validator1 = (v) => v === 'hello';
    const validator2 = (v) => v === 'hi';
    const isGreet = or(validator1, validator2);

    expect(isGreet('hi')).to.be.an('object').that.has.property('valid', true);
    expect(isGreet('hello')).to.be.an('object').that.has.property('valid', true);

    const invalidResult = isGreet('nope');
    expect(invalidResult).to.be.an('object').that.has.property('valid', false);
    expect(invalidResult).to.have.property('errors');
    expect(invalidResult.errors.length).to.equal(0);
  });

  it('should compose the response objects from the received validators', () => {
    const validator1 = createValidator((v) => v === 'hello', 'not hello');
    const validator2 = createValidator((v) => v === 'hi', 'not hi');
    const isGreet = or(validator1, validator2);

    expect(isGreet('hi')).to.be.an('object').that.has.property('valid', true);

    const invalidResult = isGreet('nope');

    expect(invalidResult).to.be.an('object').that.has.property('valid', false);
    expect(invalidResult).to.have.property('errors');
    expect(invalidResult.errors).to.deep.equal(['not hi', 'not hello']);
  });

  it('should compose the responses both from boolean returning validators or response object returning ones', () => {
    const validator1 = (v) => v === 'hello';
    const validator2 = createValidator((v) => v === 'hi', 'not hi');
    const isGreet = or(validator1, validator2);

    expect(isGreet('hello')).to.be.an('object').that.has.property('valid', true);

    const invalidResult = isGreet('foo');

    expect(invalidResult).to.be.an('object').that.has.property('valid', false);
    expect(invalidResult).to.have.property('errors');
    expect(invalidResult.errors).to.deep.equal(['not hi']);
  });
});
