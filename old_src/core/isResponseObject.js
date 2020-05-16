import INTERNAL_KEY from '../_internals/INTERNAL_KEY';

/**
 * Validate whether the given value is a response object.
 * A response object is an object if the format of:
 *
 * { valid: boolean, error?: string, errors?: string[] }
 */
const isResponseObject = (maybeResponseObject) => {
  // a quick shortcut for responses object created with `createResponse` :3
  if (maybeResponseObject && maybeResponseObject[INTERNAL_KEY]) {
    return true;
  }

  if (maybeResponseObject && typeof maybeResponseObject.valid === 'boolean') {
    if (maybeResponseObject.valid === false) {
      return (typeof maybeResponseObject.error === 'string' || Array.isArray(maybeResponseObject.errors));
    }

    return true;
  }

  return false;
};

export default isResponseObject;
