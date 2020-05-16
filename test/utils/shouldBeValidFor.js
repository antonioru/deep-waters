/* eslint-disable no-undef */

const shouldBeValidFor = (fn, values = []) => {
  values.forEach((value) => {
    const valueName = (value !== null && value !== undefined && !!value.toString) ? value.toString() : 'hidden value';

    it(`should be valid for values like ${valueName}`, () => {
      const result = fn(value);
      expect(result).to.be.an('object').that.has.property('valid', true);
    });
  });
};

export default shouldBeValidFor;
