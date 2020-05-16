/**
 * Takes a validator and returns its memoized version.
 * By design it uses Map to cache the results, this behaviour can be change by providing a different cache type.
 * @param fn
 * @param CacheType
 */
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
