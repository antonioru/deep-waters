import hasShape from './hasShape';
import every from './every';

const arrayOf = (shape) => every(hasShape(shape));

export default arrayOf;
