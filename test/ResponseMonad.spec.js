import Response from '../src/utils/ResponseMonad';
import { stubTrue, stubFalse } from '../src/utils/_internals';

describe('ResponseMonad', () => {
  const responseMock = ({ valid: false, errors: ['Err1'] });
  const responseMock2 = ({ valid: false, errors: ['Err2'] });
  const responseMock3 = ({ valid: true });


  it('should be a function itself', () => {
    expect(Response).to.be.a('function');
  });

  it('the of method equals the monad constructor', () => {
    expect(Response).to.have.property('of');
    expect(Response).to.equal(Response.of);
  });

  it('should verify the left identity rule', () => {
    const fn = (state) => ({ ...state, prop: 1 });
    const r1 = Response.of(responseMock).apply(fn);
    const r2 = fn(responseMock);

    expect(r1).to.deep.equal(r2);
  });

  it('should verify the right identity rule', () => {
    const r1 = Response.of({ valid: false, errors: ['err'] }).apply(Response.of).emit();
    const r2 = Response.of({ valid: false, errors: ['err'] }).emit();

    expect(r1).to.deep.equal(r2);
  });

  it('should verify the associativity rule: (f ∘ g) ∘ h = f ∘ (g ∘ h)', () => {
    /* eslint-disable max-len */
    const r1 = Response.of(responseMock).merge(() => responseMock2).merge(() => responseMock3).emit();
    const r2 = Response.of(Response.of(responseMock).merge(() => responseMock2).emit()).merge(() => responseMock3).emit();
    /* eslint-enable max-len */

    expect(r1).to.deep.equal(r2);
  });

  it('should allow to create new response monad from the \'of\' method', () => {
    const result0 = Response.of(true);
    const result1 = Response.of(false);
    const result2 = Response.of(responseMock);
    const result3 = Response.of(responseMock3);

    expect(result0).to.have.property('valid', true);
    expect(result0).to.not.have.property('errors');

    expect(result1).to.have.property('valid', false);
    expect(result1).to.have.property('errors');
    expect(result1.errors).to.be.an('array');
    expect(result1.errors).to.deep.equal([]);

    expect(result2).to.have.property('valid', false);
    expect(result2).to.have.property('errors');
    expect(result2.errors).to.be.an('array');
    expect(result2.errors).to.deep.equal(['Err1']);

    expect(result3).to.have.property('valid', true);
    expect(result3).to.not.have.property('errors');
  });

  it('the returned response should expose the methods to merge other responses', () => {
    const result = Response.of(responseMock);

    expect(result).to.be.an('object');
    expect(result).to.be.frozen;
    expect(result).to.have.property('merge');
    expect(result).to.have.property('apply');

    expect(result.merge).to.be.a('function');
    expect(result.apply).to.be.a('function');
    expect(result.valid).to.be.a('boolean');
    expect(result.errors).to.be.an('array');
  });

  it('should sanitize a \'wrong\' response', () => {
    const result = Response.of({ valid: true, errors: ['Err1', 'Err2'] });

    expect(result).to.be.an('object');
    expect(result).to.be.frozen;
    expect(result).to.have.property('merge');
    expect(result).to.have.property('apply');
    expect(result).to.have.own.property('valid');
    expect(result).to.not.have.own.property('errors');
  });

  it('should expose the AND comparison function', () => {
    expect(Response).to.have.property('and');

    expect(Response.and(true, true)).to.be.true;
    expect(Response.and(true, false)).to.be.false;
    expect(Response.and('foo', false)).to.be.false;
    expect(Response.and('foo', 'foo')).to.be.true;
    expect(Response.and(false, false)).to.be.false;
  });

  it('should expose the OR comparison function', () => {
    expect(Response).to.have.property('or');

    expect(Response.or(true, true)).to.be.true;
    expect(Response.or(true, false)).to.be.true;
    expect(Response.or('foo', false)).to.be.true;
    expect(Response.or('foo', 'foo')).to.be.true;
    expect(Response.or(false, false)).to.be.false;
  });

  it('should merge in AND, by default', () => {
    const result = Response.of(responseMock).merge(() => responseMock2).merge(() => responseMock3).emit();

    expect(result).to.be.an('object');
    expect(result.valid).to.be.false;
    expect(result.errors).to.deep.equal(['Err2', 'Err1']);
  });

  it('should merge in OR, if defined', () => {
    const result = Response.of(responseMock, Response.or).merge(() => responseMock2).merge(() => responseMock3).emit();

    expect(result).to.be.an('object');
    expect(result).to.have.property('valid', true);
    expect(result).to.not.have.property('errors');
  });

  it('should handle boolean responses', () => {
    const andResult = Response.of(false).merge(stubTrue).merge(stubFalse).emit();

    expect(andResult).to.be.an('object');
    expect(andResult).to.have.property('valid', false);
    expect(andResult).to.have.property('errors');
    expect(andResult.errors).to.deep.equal([]);

    const orResult = Response.of(false, Response.or).merge(stubTrue).merge(stubFalse).emit();

    expect(orResult).to.be.an('object');
    expect(orResult).to.have.property('valid', true);
    expect(orResult).to.not.have.property('errors');
  });
});
