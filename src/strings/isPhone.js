import compose from '../compose';
import or from '../or';
import isString from './isString';
import matchesPattern from './matchesPattern';

/* eslint-disable max-len */
const isInternational = matchesPattern(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/);
const isUK = matchesPattern(/^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/);
const isUSA = matchesPattern(/1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?/);
const isGermany = matchesPattern(/^([+][0-9]{1,3}[ .-])?([(]{1}[0-9]{1,6}[)])?([0-9 .\-/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/);
const isChina = matchesPattern(/1[34578][012356789]\d{8}|134[012345678]\d{7}/);
const isRussia = matchesPattern(/^((\+7|7|8)+([0-9]){10})$/);
const isJapan = matchesPattern(/^(?:\d{10}|\d{3}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{3}-\d{4}-\d{4})$/);
/* eslint-enable max-len */

const isPhone = compose(
  isString,
  or(isInternational, isUSA, isUK, isGermany, isUSA, isChina, isRussia, isJapan),
);

export default isPhone;
