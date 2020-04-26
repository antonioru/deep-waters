import minLength from '../src/minLength';

describe('minLength', () => {
  it('should be a function', () => {
    expect(minLength).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = minLength(5);

    expect(result).to.be.a('function');
  });

  it('the returned function should evaluate the length of its first parameter', () => {
    const minLength5 = minLength(5);

    expect(minLength5('he')).to.be.false;
    expect(minLength5('hell')).to.be.false;
    expect(minLength5('hello')).to.be.true;
    expect(minLength5('hellooooooooooo')).to.be.true;

    expect(minLength5([])).to.be.false;
    expect(minLength5([1, 2, 3])).to.be.false;
    expect(minLength5([1, 2, 3, 4, 5])).to.be.true;
    expect(minLength5([1, 2, 3, 4, 5, 6])).to.be.true;

    expect(minLength5({})).to.be.false;
    expect(minLength5({ length: 5 })).to.be.true;
    expect(minLength5({ p: 1, p2: 1, p3: 1, p4: 1, p5: 1 })).to.be.false;
  });
});
