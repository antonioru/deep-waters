import when from '../src/when';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';
import Response from '../src/utils/ResponseMonad';
import { stubTrue, stubFalse } from '../src/utils/_internals';

describe('when', () => {
  shouldBeAHigherOrderFunction(when, stubFalse);


  it('should not perform the second function when the first returns false', () => {
    const spy = sinon.spy();
    const validator = when(stubFalse, spy);

    validator();

    expect(spy.called).to.be.false;
  });

  it('should perform the second function when the first returns true', () => {
    const spy = sinon.spy();
    const validator = when(stubTrue, spy);

    validator();

    expect(spy.called).to.be.true;
  });

  it('should work with monadic responses too', () => {
    const spy = sinon.spy();
    const validator = when(() => Response.of({ valid: true }), spy);

    validator();

    expect(spy.called).to.be.true;
  });
});
