import compose from './compose';
import isString from '../src/isString';

const isDateFormat = compose(
  isString,
  // eslint-disable-next-line no-restricted-globals
  (value) => (new Date(value) !== 'Invalid Date' && !isNaN(new Date(value))),
);

export default isDateFormat;
