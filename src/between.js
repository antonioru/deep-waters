import compose from './compose';
import biggerThan from './biggerThan';
import lessThan from './lessThan';

const between = (min) => (max) => compose(
  biggerThan(min),
  lessThan(max),
);

export default between;
