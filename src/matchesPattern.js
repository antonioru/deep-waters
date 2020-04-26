const matchesPattern = (regex) => (str) => !!regex.test(str);

export default matchesPattern;
