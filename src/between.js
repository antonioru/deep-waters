import compose from './compose';
import biggerThan from './biggerThan';
import smallerThan from './smallerThan';

const between = (min) => (max) => compose(
  biggerThan(min),
  smallerThan(max),
);

export default between;
