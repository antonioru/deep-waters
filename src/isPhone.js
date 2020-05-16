import compose from './compose';
import isString from './isString';
import or from './or';
import createValidator from './utils/createValidator';
import isInternational from './phone/isInternational';
import isUK from './phone/isUK';
import isUSA from './phone/isUSA';
import isChina from './phone/isChina';
import isGermany from './phone/isGermany';
import isRussia from './phone/isRussia';
import isJapan from './phone/isJapan';

const isPhone = compose(
  isString,
  or(isInternational, isUSA, isUK, isGermany, isChina, isRussia, isJapan),
);

export default createValidator(isPhone, 'The provided value is not a valid phone number');
