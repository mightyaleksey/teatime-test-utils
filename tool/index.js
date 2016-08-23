'use strict';

const { compose, cond, curry, isString, propertyOf } = require('lodash/fp');
const { getAttribute, getPairs } = require('./fn');
const { toSelector } = require('./selector');
const assert = require('power-assert');

/* eslint-disable max-len */
const identify = curry(pairs => compose(isIdentity, cond(getPairs(pairs)), toSelector));
const getValue = curry((getters, identify) =>
  selector => propertyOf(getters)(identify(selector))(selector));
const setValue = curry((setters, identify) =>
  (selector, value) => propertyOf(setters)(identify(selector))(selector, value));

exports.identify = identify;
exports.identifyElement = pairs => compose(identify(pairs), getAttribute('class'));
exports.getValue = getValue;
exports.setValue = setValue;

/**
 * @param  {string} identity
 * @return {string}
 */
function isIdentity(identity) {
  assert(isString(identity), 'unknown control type');
  return identity;
}
