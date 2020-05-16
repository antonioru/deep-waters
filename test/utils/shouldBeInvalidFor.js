/* eslint-disable no-undef */

const shouldBeInvalidFor = (fn, values = []) => {
  values.forEach((value) => {
    const valueName = (value !== null && value !== undefined && !!value.toString) ? value.toString() : 'hidden value';

    it(`should be invalid for values like: ${valueName}`, () => {
      const result = fn(value);
      expect(result).to.be.an('object').that.has.property('valid', false);
      expect(result).to.have.property('errors');
      expect(result.errors.length).to.not.equal(0);
      expect(result.errors[0]).to.be.a('string');
    });
  });
};

export default shouldBeInvalidFor;
