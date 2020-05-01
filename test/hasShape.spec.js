import hasShape from '../src/hasShape';
import compose from '../src/compose';
import isString from '../src/strings/isString';
import isNumber from '../src/numbers/isNumber';
import isBoolean from '../src/isBoolean';

describe('hasShape', () => {
  it('should be a function', () => {
    expect(hasShape).to.be.a('function');
  });

  it('should return a new function', () => {
    const isUser = hasShape({
      name: isString,
      age: compose(isNumber, (age) => age >= 18),
    });

    expect(isUser).to.be.a('function');
  });

  it('should return true if the provided object has the defined shape', () => {
    const isUser = hasShape({
      name: isString,
      age: compose(isNumber, (age) => age >= 18),
      meta: hasShape({
        privacy: isBoolean,
      }),
    });

    expect(isUser({ name: 'Antonio', age: 33, meta: { privacy: false } })).to.be.true;
    expect(isUser({ name: 'Antonio', age: 33, meta: { privacy: 'foo' } })).to.be.false;
  });

  it('should return false for any other value', () => {
    const isUser = hasShape({
      name: isString,
      age: compose(isNumber, (age) => age >= 18),
      meta: hasShape({
        privacy: isBoolean,
      }),
    });

    expect(isUser(false)).to.be.false;
    expect(isUser('ciao')).to.be.false;
    expect(isUser(null)).to.be.false;
    expect(isUser(undefined)).to.be.false;
  });
});
