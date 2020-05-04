import or from './or';
import isAmericanExpress from './credit-cards/isAmericanExpress';
import isVISA from './credit-cards/isVISA';
import isMastercard from './credit-cards/isMastercard';
import isDinersClub from './credit-cards/isDinersClub';
import isDiscover from './credit-cards/isDiscover';
import isJCB from './credit-cards/isJCB';


/**
 * Reports whether the received value is a valid credit-card number
 * @type {function(*=): boolean}
 */
const isCreditCard = or(isAmericanExpress, isVISA, isMastercard, isDinersClub, isDiscover, isJCB);

export default isCreditCard;
