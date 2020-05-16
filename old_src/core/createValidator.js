import withError from './withError';
import memo from './memo';

/**
 * Takes a validator and returns a memoized version with an error message
 * @param validator
 * @param errorMessage
 * @returns {function(...[*]=)}
 */
const createValidator = (validator, errorMessage) => memo(withError(validator, errorMessage));

export default createValidator;
