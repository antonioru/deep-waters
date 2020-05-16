import between from '../src/between';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';

describe('between', () => {
  shouldBeAHigherOrderFunction(between, 2, 4);

  it('the created validator should return a response', () => {
    const validator = between(2, 5);

    expect(validator(3)).to.be.an('object').that.has.property('valid', true);
    expect(validator(5)).to.be.an('object').that.has.property('errors');
  });

  it('should allow to define a custom error message', () => {
    const customErr = 'foo';
    const validator = between(2, 3, customErr);
    const result = validator(5);

    expect(result.errors[0]).to.equals(customErr);
  });

  shouldBeValidFor(between(2, 6), [3, 4, 5]);
  shouldBeValidFor(between(-0.1, 100), Array.from({ length: 100 }).map((_, i) => (i / 10)));

  shouldBeInvalidFor(between(2, 6), [1, 7, 6.1, 1.9, undefined, null, new Set(), new Map()]);
});
