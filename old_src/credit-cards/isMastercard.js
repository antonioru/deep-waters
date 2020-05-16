import matchesPattern from '../matchesPattern';

const isMastercard = matchesPattern(/^(?:5[1-5][0-9]{14})$/);

export default isMastercard;
