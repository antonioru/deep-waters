import memo from '../src/utils/memo';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';

describe('memo', () => {
  shouldBeAHigherOrderFunction(memo);

  it('should return a memoized version of the given function', () => {
    const spy = sinon.spy();
    const fn = (n1, n2) => {
      spy(n1, n2);
      return n1 + n2;
    };
    const memoized = memo(fn);

    expect(memoized(1, 2)).to.equal(3);
    expect(spy.called).to.be.true;
    expect(spy.calledOnce).to.be.true;

    memoized(1, 2);
    memoized(1, 2);
    memoized(1, 2);

    // recall the fn
    expect(spy.calledOnce).to.be.true;

    memoized(2, 2);
    expect(spy.calledOnce).to.be.false;
    expect(spy.calledTwice).to.be.true;

    memoized();
    expect(spy.calledThrice).to.be.true;
  });


  it('should allow to define a custom cache', () => {
    class CacheMock {
      constructor() {
        this.map = new Map(); // yeah, I'm taking the piss
      }

      has(...args) {
        return this.map.has(...args);
      }

      set(...args) {
        return this.map.set(...args);
      }

      get(...args) {
        return this.map.get(...args);
      }
    }

    const spy = sinon.spy();
    const fn = (n1, n2) => {
      spy(n1, n2);
      return n1 + n2;
    };
    const memoized = memo(fn, CacheMock);

    expect(memoized(1, 2)).to.equal(3);
    expect(spy.called).to.be.true;
    expect(spy.calledOnce).to.be.true;

    memoized(1, 2);
    memoized(1, 2);
    memoized(1, 2);

    expect(spy.calledOnce).to.be.true;
  });
});
