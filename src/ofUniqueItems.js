import compose from './compose';
import createValidator from './utils/createValidator';

const ofUniqueItems = compose(
  Array.isArray,
  (array) => new Set(array).size === array.length,
);

export default createValidator(ofUniqueItems, 'The provided value does not contain unique items only');
