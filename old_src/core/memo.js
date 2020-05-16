const memo = (fn, CacheType = Map) => {
  const memory = new CacheType();

  return (...args) => {
    const key = args[0];
    if (memory.has(key)) return memory.get(key);

    memory.set(key, fn(...args));
    return memory.get(key);
  };
};

export default memo;
