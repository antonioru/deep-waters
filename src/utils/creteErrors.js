const createErrors = (value) => {
  if (value) {
    if (Array.isArray(value)) {
      return [...value];
    }

    if (typeof value === 'string') {
      return [value];
    }

    return value();
  }

  return [];
};

export default createErrors;
