/**
 * Takes an object of validators defining the possible shape of an object and returns a new function that reports
 * whether the received objects matches that shape or not.
 *
 * Please note:
 * The created validator isUser only makes sure the received object has all the defined keys and each key matches
 * the defined validation. It does not check on properties not defined by the shape, meaning it will return true
 * even if the object has additional properties.
 *
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
