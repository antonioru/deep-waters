import matchesPattern from '../src/matchesPattern';
import shouldBeAHigherOrderFunction from './utils/shouldBeAHigherOrderFunction';
import shouldBeValidFor from './utils/shouldBeValidFor';
import shouldBeInvalidFor from './utils/shouldBeInvalidFor';
import isRespObject from '../src/utils/isRespObject';

const hex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
const htmlTag = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;

describe('matchesPattern', () => {
  shouldBeAHigherOrderFunction(matchesPattern, /test/);

  it('should return a validator', () => {
    const validator = matchesPattern(hex, 'foo');
    const validResponse = validator('something');

    expect(isRespObject(validResponse)).to.be.true;
    expect(validResponse.errors).to.deep.equal(['foo']);
  });

  shouldBeValidFor(matchesPattern(hex), ['#a3c113', '#aac5f3', '#bcca1f', '#ac4a65']);
  shouldBeInvalidFor(matchesPattern(hex), [1, 0, 'foo', '', '#g3c113', undefined, null, new Set(), new Map()]);

  shouldBeValidFor(matchesPattern(htmlTag), ['<a>foo</a>', '<span>foo</span>', '<div></div>', '<img src="foo" />']);
  shouldBeInvalidFor(matchesPattern(htmlTag), [1, 0, 'foo', '', '#g3c113', undefined, null, new Set(), new Map()]);
});
