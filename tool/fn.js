'use strict';

const { broGetAttribute } = require('./bro');
const {
  compose,
  constant,
  curry,
  isString,
  map,
  toPairs,
} = require('lodash/fp');
const assert = require('power-assert');

const getAttribute = curry((attributeName, selector) =>
  broGetAttribute(selector, attributeName));

const getPairs = compose(map(flip), toPairs);

exports.getAttribute = getAttribute;
exports.getPairs = getPairs;
exports.isSelector = isSelector;
exports.trace = trace;

/**
 * @param  {array} a ['type', condition()]
 * @return {array}   [condition(), constant('type')]
 */
function flip(a) {
  return [a[1], constant(a[0])];
}

/**
 * @param  {string} selector
 * @return {string}
 */
function isSelector(selector) {
  assert(isString(selector));
  return selector;
}

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
