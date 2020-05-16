import createResponse from '../src/utils/createResponse';
import isRespObject from '../src/utils/isRespObject';

describe('createResponse', () => {
  it('should be a function', () => {
    expect(createResponse).to.be.a('function');
  });

  it('should create a \'response object\'', () => {
    const response1 = createResponse(false, 'error');
    const response2 = createResponse(false, ['error', 'error2']);
    const response3 = createResponse(false, () => ['error']);
    const response4 = createResponse(true);

    expect(isRespObject(response1)).to.be.true;
    expect(response1.valid).to.be.false;
    expect(response1.errors).to.deep.equal(['error']);

    expect(isRespObject(response2)).to.be.true;
    expect(response2.valid).to.be.false;
    expect(response2.errors).to.deep.equal(['error', 'error2']);

    expect(isRespObject(response3)).to.be.true;
    expect(response3.valid).to.be.false;
    expect(response3.errors).to.deep.equal(['error']);

    expect(isRespObject(response4)).to.be.true;
    expect(response4).to.not.have.key('errors');
    expect(response4.valid).to.be.true;
  });
});
