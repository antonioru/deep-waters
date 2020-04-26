/**
 * Returns a validator for the defined shape
 * @param shape
 * @returns {function(*): boolean}
 */
const hasShape = (shape) => (object) => Object.keys(shape).every((prop) => {
  const validator = shape[prop];
  let result = false;

  try {
    result = validator(object[prop]);
  } catch (e) {
    return false;
  }

  return result;
});

export default hasShape;
