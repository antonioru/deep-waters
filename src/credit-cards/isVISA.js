import matchesPattern from '../matchesPattern';

const isVISA = matchesPattern(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/);

export default isVISA;
