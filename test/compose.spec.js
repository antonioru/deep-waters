import compose from '../src/compose';

describe('compose', () => {
  it('should be a function', () => {
    expect(compose).to.be.a('function');
  });

  it('should return a new function', () => {
    const fn = () => null;
    const result = compose(fn);

    expect(result).to.be.a('function');
  });

  it('should merge the received functions into a single one, each one receiving the same parameter', () => {
    const fn = sinon.fake.returns(true);
    const fn2 = sinon.fake.returns(false);
    const result = compose(fn, fn2);
    const param = 'item';

    result(param);

    expect(fn.called).to.be.true;
    expect(fn.args[0][0]).to.equal(param);
    expect(fn2.called).to.be.true;
    expect(fn2.args[0][0]).to.equal(param);
  });
});
