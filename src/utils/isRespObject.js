/**
 * Returns true if the given value is a valid response object
 * @param obj
 */
const isRespObject = (obj) => {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return (
      typeof obj.valid === 'boolean'
      && (obj.errors ? Array.isArray(obj.errors) : true)
    );
  }

  return false;
};

export default isRespObject;
