const assert = (something, error = 'Invalid value provided') => {
  if (!something) throw new Error(error);
};

export default assert;
