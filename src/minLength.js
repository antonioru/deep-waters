import compose from './compose';
import hasProp from './hasProp';

const minLength = (min) => compose(
  hasProp('length'),
  ({ length }) => length >= min,
);

export default minLength;
