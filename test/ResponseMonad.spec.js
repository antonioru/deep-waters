import Response from '../src/core/ResponseMonad';

describe('ResponseMonad', () => {
  const responseMock = ({ valid: false, errors: ['Err1'] });
  const responseMock2 = ({ valid: false, errors: ['Err2'] });
  const responseMock3 = ({ valid: true });


  it('should be an immutable object', () => {
    expect(Response).to.be.an('object');
    expect(Response).to.be.frozen;
  });

  it('should expose the \'of\' method', () => {
    expect(Response.of).to.be.a('function');
  });

  it('should return an immutable and chainable instance of the monad', () => {
    const result = Response.of(responseMock);

    expect(result).to.be.an('object');
    expect(result).to.be.frozen;
    expect(result).to.be.have.own.property('merge');
    expect(result).to.be.have.own.property('apply');
    expect(result).to.be.have.own.property('emit');

    expect(result.merge).to.be.a('function');
    expect(result.apply).to.be.a('function');
    expect(result.emit).to.be.a('function');
  });

  it('Left identity', () => {
    const fn = (state) => ({ ...state, prop: 1 });
    const r1 = Response.of(responseMock).apply(fn);
    const r2 = fn(responseMock);

    expect(r1).to.deep.equal(r2);
  });

  it('Right identity', () => {
    const r1 = Response.of({ valid: false, errors: ['err'] }).apply(Response.of).emit();
    const r2 = Response.of({ valid: false, errors: ['err'] }).emit();

    expect(r1).to.deep.equal(r2);
  });

  it('Associativity: (f ∘ g) ∘ h = f ∘ (g ∘ h)', () => {
    /* eslint-disable max-len */
    const r1 = Response.of(responseMock).merge(() => responseMock2).merge(() => responseMock3).emit();
    const r2 = Response.of(Response.of(responseMock).merge(() => responseMock2).emit()).merge(() => responseMock3).emit();
    /* eslint-enable max-len */

    expect(r1).to.deep.equal(r2);
  });
});
