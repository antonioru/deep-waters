import assert from './assert';

const assertError = (error) => assert(
  typeof error === 'string' || typeof error === 'function',
  'Invalid error provided, it must be of type string or of type function',
);

export default assertError;
