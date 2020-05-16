import matchesPattern from '../matchesPattern';

const isJCB = matchesPattern(/^(?:(?:2131|1800|35\d{3})\d{11})$/);

export default isJCB;
