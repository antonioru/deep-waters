import ofUniqueItems from '../src/ofUniqueItems';

describe('ofUniqueItems', () => {
  it('should be a function', () => {
    expect(ofUniqueItems).to.be.a('function');
  });

  it('should evaluate if the provided array is of unique items', () => {
    expect(ofUniqueItems([1, 2, 3])).to.be.true;
    expect(ofUniqueItems(['h', 'e', 'l', 'o'])).to.be.true;
    expect(ofUniqueItems(['h', 'e', 'l', 'l', 'o'])).to.be.false;
  });

  it('should return false for any other value', () => {
    expect(ofUniqueItems({})).to.be.false;
    expect(ofUniqueItems({ length: 5 })).to.be.false;
    expect(ofUniqueItems({ p: 1, p2: 1, p3: 1, p4: 1, p5: 1 })).to.be.false;
  });
});
