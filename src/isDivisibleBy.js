import compose from './compose';
import isNumber from './isNumber';
import createValidator from './utils/createValidator';

const isDivisibleBy = (number, error = `The provided number is not divisible by ${number}`) => createValidator(
  compose(isNumber, (value) => value % number === 0),
  error,
);

export default isDivisibleBy;
