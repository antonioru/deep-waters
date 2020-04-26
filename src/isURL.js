import compose from './compose';
import not from './not';
import matchesPattern from './matchesPattern';
import isEmptyString from './isEmptyString';

/**
 * Returns true if the given string matches a valid url, according to:
 * https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
 * @type {function(*=): boolean}
 */
const isURL = compose(
  not(isEmptyString),
  matchesPattern(
    new RegExp('^(https?:\\/\\/)?' // protocol
      + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
      + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
      + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
      + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
      + '(\\#[-a-z\\d_]*)?$', 'i'),
  ),
);

export default isURL;
