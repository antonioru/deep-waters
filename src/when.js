const when = (condition, fn) => (value) => {
  if (condition(value)) return fn(value);

  return true;
};

export default when;
