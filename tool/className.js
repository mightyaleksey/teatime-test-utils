'use strict';

const { mapValues } = require('lodash/fp');
const assert = require('power-assert');

const mapClassNames = mapValues(classNameSelector);

exports.className = className;
exports.classNameSelector = classNameSelector;
exports.loadSelectors = loadSelectors;
exports.mapClassNames = mapClassNames;

/**
 * @param  {string} classNameSelector
 * @return {string}
 */
function className(classNameSelector) {
  assert(typeof classNameSelector === 'string');
  return classNameSelector.replace('.', '');
}

/**
 * @param  {string} classNames
 * @return {string}
 */
function classNameSelector(classNames) {
  assert(typeof classNames === 'string');
  return '.' + classNames.split(' ').join('.');
}

/**
 * @param  {string} modulepath
 * @return {object}
 */
function loadSelectors(modulepath) {
  return mapClassNames(require(modulepath));
}
