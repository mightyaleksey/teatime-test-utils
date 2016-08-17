'use strict';

exports.trace = trace;

/**
 * For the purpose of debug
 *
 * Conviniently used with the functional composition:
 *
 * ```javascript
 * compose(other, trace, anyFn, trace);
 * ```
 *
 * @param  {*} a
 * @return {*}
 */
function trace(a) {
  console.log(a); // eslint-disable-line no-console
  return a;
}
