import oneOfValues from '../old_src/oneOfValues';

describe('oneOfValues', () => {
  it('should be a function', () => {
    expect(oneOfValues).to.be.a('function');
  });

  it('should return a new function', () => {
    const isRole = oneOfValues(['admin', 'user']);

    expect(isRole).to.be.a('function');
  });

  it('should return true if the provided value is included in the defined one', () => {
    const isRole = oneOfValues(['admin', 'user']);


    expect(isRole('user')).to.be.true;
    expect(isRole('admin')).to.be.true;
    expect(isRole(10)).to.be.false;
  });

  it('should return false for any other value', () => {
    const isRole = oneOfValues(['admin', 'user']);

    expect(isRole(false)).to.be.false;
    expect(isRole('ciao')).to.be.false;
    expect(isRole(null)).to.be.false;
    expect(isRole(undefined)).to.be.false;


    expect(oneOfValues(undefined)(null)).to.be.false;
  });
});
