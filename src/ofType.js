import createValidator from './utils/createValidator';

/**
 * Using Object.prototype.toString.call() works much better than typeof for type checking in JavaScript, since it works
 * properly for null. Not only that, but it returns the specific type of any given object.
 */
const ofType = (className, error = `The provided value is not of type ${className}`) => createValidator(
  (...args) => Object.prototype.toString.call(...args) === `[object ${className}]`,
  error,
);

export default ofType;
