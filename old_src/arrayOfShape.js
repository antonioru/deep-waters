import hasShape from './hasShape';
import every from '../src/every';

/**
 * Takes an object of validators defining the possible shape of an object and returns a new function that reports
 * whether the received array matches that shape for every of its elements.
 * @param shape
 * @returns {function(*): *}
 */
const arrayOfShape = (shape) => every(hasShape(shape));

export default arrayOfShape;
