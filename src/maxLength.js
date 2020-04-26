import compose from './compose';
import hasProp from './hasProp';

const maxLength = (max) => compose(
  hasProp('length'),
  ({ length }) => length <= max,
);

export default maxLength;
