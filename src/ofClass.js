/**
 * Using Object.prototype.toString.call() works much than typeof for type checking in JavaScript, since it works
 * properly for null. Not only that, but it returns the specific type of any given object.
 * @param className
 * @returns {function(*=): boolean}
 */
const ofClass = (className) => (value) => Object.prototype.toString.call(value) === `[object ${className}]`;

export default ofClass;
