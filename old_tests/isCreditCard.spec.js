import isCreditCard from '../old_src/isCreditCard';

const VISA = [
  4556097732349390,
  4556679382380302,
  4716417046959725,
  4286124395547263,
  4929940001617346,
  4119476866045,
  4532330267236,
  4539134636599,
  4929343806145326,
  4532732118531869,
  4929604835117135,
  4716703944477955,
  4539318685271668,
];

const MASTERCARD = [
  5238033372693709,
  5443297567351776,
  5276023546902691,
  5265965073926746,
  5505055900169254,
  5243782384030507,
  5214663796987028,
  5466944167857718,
  5137810230083682,
  5460508603171285,
];

const DISCOVER = [
  6011674845546692,
  6011623996140508,
  6011504503925203,
  6011583945260254,
  6011145045052385,
];

const AMERICAN_EXPRESS = [
  377758019440138,
  378565941064392,
  377140712304012,
  344942613287950,
  347190259623701,
  346085969406796,
  343186713663204,
  374943601421729,
  345207875655792,
  346568410465222,
  374412200929896,
  341457966263717,
  345035104209309,
  346693290755631,
  372535388283173,
  344882037426828,
  346107793875382,
  378991972758282,
  372627300781176,
  347485351006189,
  341995209587087,
  344278928146908,
  376175789910326,
  372745813417409,
  377376466822987,
];


const DINERS_CLUB = [
  38716394960899,
  30351071165824,
  36551495268021,
  36622386049695,
];


const JCB = [
  3528701379615495,
];

describe('isCreditCard', () => {
  it('should be a function', () => {
    expect(isCreditCard).to.be.a('function');
  });

  it('should return true when the provided value is a valid American Express', () => {
    AMERICAN_EXPRESS.forEach((card) => {
      expect(isCreditCard(card)).to.be.true;
    });
  });

  it('should return true when the provided value is a valid VISA', () => {
    VISA.forEach((card) => {
      expect(isCreditCard(card)).to.be.true;
    });
  });

  it('should return true when the provided value is a valid Mastercard', () => {
    MASTERCARD.forEach((card) => {
      expect(isCreditCard(card)).to.be.true;
    });
  });

  it('should return true when the provided value is a valid Discover', () => {
    DISCOVER.forEach((card) => {
      expect(isCreditCard(card)).to.be.true;
    });
  });

  it('should return true when the provided value is a valid Diners Club', () => {
    DINERS_CLUB.forEach((card) => {
      expect(isCreditCard(card)).to.be.true;
    });
  });


  it('should return true when the provided value is a valid JCB', () => {
    JCB.forEach((card) => {
      expect(isCreditCard(card)).to.be.true;
    });
  });

  it('should return false when the provided value is not a valid credit card number', () => {
    expect(isCreditCard(null)).to.be.false;
    expect(isCreditCard(undefined)).to.be.false;
    expect(isCreditCard([])).to.be.false;
    expect(isCreditCard([1, 2, 4])).to.be.false;
    expect(isCreditCard({})).to.be.false;
  });
});
