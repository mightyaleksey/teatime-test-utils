'use strict';

const {
  compose,
  cond,
  curry,
  propertyOf,
  isFunction,
  isString,
} = require('lodash/fp');
const { getAttribute, getPairs } = require('./fn');
const { toSelector } = require('./selector');
const assert = require('power-assert');
const forEach = require('lodash/forEach');

const validate = curry((v, f, d) => v(f(d), d));

/* eslint-disable max-len */
const identify = pairs => compose(validate(isIdentity, cond(getPairs(pairs))), toSelector);
const identifyElement = pairs => compose(identify(pairs), getAttribute('class'));

const getValue = curry((getters, identifyElement) => {
  forEach(getters, isGetterType);
  const getter = validate(isGetter, compose(propertyOf(getters), identifyElement));
  return selector => getter(selector)(selector);
});

const setValue = curry((setters, identifyElement) => {
  forEach(setters, isSetterType);
  const setter = validate(isSetter, compose(propertyOf(setters), identifyElement));
  return (selector, value) => setter(selector)(selector, value);
});

exports.identify = identify;
exports.identifyElement = identifyElement;
exports.getValue = getValue;
exports.setValue = setValue;

/**
 * @param  {function} getter
 * @param  {string} selector
 * @return {string}
 */
function isGetter(getter, selector) {
  assert(isFunction(getter), `unknown getter for \`${selector}\``);
  return getter;
}

/**
 * @param  {function} getter
 * @param  {string} type
 * @return {string}
 */
function isGetterType(getter, type) {
  assert(isFunction(getter), `invalid getter for \`${type}\``);
  return true;
}

/**
 * @param  {string} identity
 * @param  {string} selector
 * @return {string}
 */
function isIdentity(identity, selector) {
  assert(isString(identity), `unsupported type for \`${selector}\``);
  return identity;
}

/**
 * @param  {function} getter
 * @param  {string} selector
 * @return {string}
 */
function isSetter(getter, selector) {
  assert(isFunction(getter), `unknown getter for \`${selector}\``);
  return getter;
}

/**
 * @param  {function} setter
 * @param  {string} type
 * @return {string}
 */
function isSetterType(setter, type) {
  assert(isFunction(setter), `invalid setter for \`${type}\``);
  return true;
}
