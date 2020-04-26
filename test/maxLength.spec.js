import maxLength from '../src/maxLength';

describe('maxLength', () => {
  it('should be a function', () => {
    expect(maxLength).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = maxLength(5);

    expect(result).to.be.a('function');
  });

  it('the returned function should evaluate the length of its first parameter', () => {
    const maxLength5 = maxLength(5);

    expect(maxLength5('he')).to.be.true;
    expect(maxLength5('hell')).to.be.true;
    expect(maxLength5('hello')).to.be.true;
    expect(maxLength5('hellooooooooooo')).to.be.false;

    expect(maxLength5([])).to.be.true;
    expect(maxLength5([1, 2, 3])).to.be.true;
    expect(maxLength5([1, 2, 3, 4, 5])).to.be.true;
    expect(maxLength5([1, 2, 3, 4, 5, 6])).to.be.false;

    expect(maxLength5({})).to.be.false;
    expect(maxLength5({ length: 5 })).to.be.true;
    expect(maxLength5({ p: 1, p2: 1, p3: 1, p4: 1, p5: 1 })).to.be.false;
  });
});
