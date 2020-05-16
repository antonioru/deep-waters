import and from '../src/and';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';
import createValidator from '../src/utils/createValidator';
import { stubTrue, stubFalse } from '../src/utils/_internals';

describe('and', () => {
  shouldBeAHigherOrderFunction(and, stubTrue, stubFalse);

  it('should compose the boolean responses from the received validators', () => {
    const validator1 = (v) => v > 1;
    const validator2 = (v) => v < 10;
    const composed = and(validator1, validator2);

    expect(composed(5)).to.be.an('object').that.has.property('valid', true);

    const invalidResult = composed(11);
    expect(invalidResult).to.be.an('object').that.has.property('valid', false);
    expect(invalidResult).to.have.property('errors');
    expect(invalidResult.errors.length).to.equal(0);
  });

  it('should compose the response objects from the received validators', () => {
    const validator1 = createValidator((v) => v > 1, 'not > 1');
    const validator2 = createValidator((v) => v < 10, 'not < 10');
    const composed = and(validator1, validator2);

    expect(composed(5)).to.be.an('object').that.has.property('valid', true);

    const invalidResult = composed(11);

    expect(invalidResult).to.be.an('object').that.has.property('valid', false);
    expect(invalidResult).to.have.property('errors');
    expect(invalidResult.errors).to.deep.equal(['not < 10']);
  });

  it('should compose the responses both from boolean returning validators and response object returning ones', () => {
    const validator1 = (v) => v > 1;
    const validator2 = createValidator((v) => v < 10, 'not < 10');
    const composed = and(validator1, validator2);

    expect(composed(5)).to.be.an('object').that.has.property('valid', true);

    const invalidResult = composed(11);

    expect(invalidResult).to.be.an('object').that.has.property('valid', false);
    expect(invalidResult).to.have.property('errors');
    expect(invalidResult.errors).to.deep.equal(['not < 10']);
  });

  it('should avoid performing the next validators if one fails', () => {
    const spy1 = sinon.spy();
    const spy2 = sinon.spy();
    const spy3 = sinon.spy();

    const validator1 = (v) => {
      spy1(v);
      return typeof v === 'number';
    };

    const validator2 = createValidator((v) => {
      spy2(v);
      return v > 1;
    }, 'not > 1');

    const validator3 = (v) => {
      spy3(v);
      return v < 10;
    };

    const composed = and(validator1, validator2, validator3);

    expect(composed(5)).to.be.an('object').that.has.property('valid', true);
    expect(spy1.calledOnce).to.be.true;
    expect(spy3.calledOnce).to.be.true;
    expect(spy3.calledOnce).to.be.true;


    const invalidResult = composed(-3);

    expect(invalidResult).to.be.an('object').that.has.property('valid', false);
    expect(invalidResult).to.have.property('errors');
    expect(invalidResult.errors).to.deep.equal(['not > 1']);
    expect(spy1.calledTwice).to.be.true;
    expect(spy3.calledTwice).to.be.false;
    expect(spy3.calledTwice).to.be.false;


    const invalidResult2 = composed('foo');

    expect(invalidResult2).to.be.an('object').that.has.property('valid', false);
    expect(invalidResult2).to.have.property('errors');
    expect(invalidResult2.errors).to.deep.equal([]);
    expect(spy1.calledThrice).to.be.true;
    expect(spy3.calledThrice).to.be.false;
    expect(spy3.calledThrice).to.be.false;
  });
});
