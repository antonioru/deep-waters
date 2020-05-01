// TODO: extend to support objects and other arrays
const oneOfValues = (array) => (value) => (Array.isArray(array) ? array.contains(value) : false);

export default oneOfValues;
