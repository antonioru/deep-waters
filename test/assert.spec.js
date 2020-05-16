import assert from '../src/utils/assert';
import assertResponse from '../src/utils/assertResponse';

describe('assert', () => {
  it('should be a function', () => {
    expect(assert).to.be.a('function');
  });

  it('should throw if the provided expression is not verified', () => {
    const fn = () => {
      assert(typeof undefined === 'string');
    };

    expect(fn).to.throw();
  });

  it('should allow to customise the error message', () => {
    const fn = () => {
      assert(typeof undefined === 'string', 'foo');
    };

    expect(fn).to.throw('foo');
  });
});

describe('assertError', () => {
  it('should be a function', () => {
    expect(assertResponse).to.be.a('function');
  });

  it('should throw if the provided expression is not a valid error message (string of function)', () => {
    const fn = () => {
      assertResponse({});
    };

    expect(fn).to.throw();
  });
});
