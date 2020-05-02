import compose from './compose';

const ofUniqueItems = compose(
  Array.isArray,
  (array) => new Set(array).size === array.length,
);

export default ofUniqueItems;
