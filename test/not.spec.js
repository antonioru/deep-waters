import not from '../src/not';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';

describe('not', () => {
  shouldBeAHigherOrderFunction(not, () => true);

  it('should return the opposite of the given function', () => {
    const validator1 = () => true;
    const validator2 = () => ({ valid: false, errors: ['foo'] });
    const opposite1 = not(validator1);
    const opposite2 = not(validator2);

    expect(opposite1()).to.be.false;
    expect(opposite2()).to.deep.equal({ valid: true });
  });
});
