import assert from './assert';

const assertValidatorResponse = (response) => {
  if (typeof response !== 'boolean') {
    const msg = 'Invalid validator provided, a validator must be a function returning a boolean value';

    assert(typeof response.valid === 'boolean', msg);
  }
};

export default assertValidatorResponse;
