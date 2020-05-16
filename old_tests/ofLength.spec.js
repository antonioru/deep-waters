import ofLength from '../src/ofLength';

describe('ofLength', () => {
  it('should be a function', () => {
    expect(ofLength).to.be.a('function');
  });

  it('should return a new function', () => {
    const result = ofLength(2);

    expect(result).to.be.a('function');
  });

  it('the returned function should evaluate the length of its first parameter', () => {
    const ofLength5 = ofLength(5);

    expect(ofLength5('hell')).to.be.false;
    expect(ofLength5('hello')).to.be.true;

    expect(ofLength5([])).to.be.false;
    expect(ofLength5([1, 2, 3, 4, 5])).to.be.true;

    expect(ofLength5({})).to.be.false;
    expect(ofLength5({ length: 5 })).to.be.true;
    expect(ofLength5({ p: 1, p2: 1, p3: 1, p4: 1, p5: 1 })).to.be.false;
  });
});
