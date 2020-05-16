import arrayOfShape from '../old_src/arrayOfShape';
import compose from '../old_src/compose';
import isString from '../src/isString';
import isNumber from '../src/isNumber';
import isBoolean from '../src/isBoolean';
import hasShape from '../old_src/hasShape';

describe('arrayOf', () => {
  it('should be a function', () => {
    expect(arrayOfShape).to.be.a('function');
  });

  it('should return a new function', () => {
    const isUserCollection = arrayOfShape({
      name: isString,
      age: compose(isNumber, (age) => age >= 18),
    });

    expect(isUserCollection).to.be.a('function');
  });

  it('should return true if the provided array items have the defined shape', () => {
    const isUserCollection = arrayOfShape({
      name: isString,
      age: compose(isNumber, (age) => age >= 18),
      meta: hasShape({
        privacy: isBoolean,
      }),
    });

    expect(isUserCollection([
      { name: 'Antonio', age: 33, meta: { privacy: false } },
      { name: 'Lorem Ipsum', age: 28, meta: { privacy: true } },
    ])).to.be.true;
    expect(isUserCollection({ name: 'Antonio', age: 33, meta: { privacy: 'foo' } })).to.be.false;
  });

  it('should return false for any other value', () => {
    const isUserCollection = arrayOfShape({
      name: isString,
      age: compose(isNumber, (age) => age >= 18),
      meta: hasShape({
        privacy: isBoolean,
      }),
    });

    expect(isUserCollection(false)).to.be.false;
    expect(isUserCollection('ciao')).to.be.false;
    expect(isUserCollection(null)).to.be.false;
    expect(isUserCollection(undefined)).to.be.false;
  });
});
