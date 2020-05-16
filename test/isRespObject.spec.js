import isRespObject from '../src/utils/isRespObject';
import createResponse from '../src/utils/createResponse';

describe('isRespObject', () => {
  it('should be a function', () => {
    expect(isRespObject).to.be.a('function');
  });

  it('should report whether the given value is a valid \'response object\'', () => {
    const response = createResponse(false, 'error');

    expect(isRespObject(response)).to.be.true;
    expect(isRespObject({ valid: false, errors: ['foo'] })).to.be.true;
    expect(isRespObject({ valid: false, errors: ['foo', 'bar'] })).to.be.true;
    expect(isRespObject({ valid: false, errors: [] })).to.be.true;
    expect(isRespObject({ valid: true })).to.be.true;
    expect(isRespObject({ valid: false })).to.be.true;

    expect(isRespObject({})).to.be.false;
    expect(isRespObject(true)).to.be.false;
    expect(isRespObject(false)).to.be.false;
    expect(isRespObject(undefined)).to.be.false;
    expect(isRespObject(null)).to.be.false;
  });
});
