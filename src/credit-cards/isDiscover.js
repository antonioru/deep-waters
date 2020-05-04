import matchesPattern from '../matchesPattern';

const isDiscover = matchesPattern(/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/);

export default isDiscover;
