'use strict';

const { compose, join, map, mapValues, split } = require('lodash/fp');
const { dirname, resolve } = require('path');

const transformSelector = compose(join(''), map(classSelector), split(' '));
const loadSelectors = compose(mapValues(transformSelector), require, abspath);

exports.abspath = abspath;
exports.classSelector = classSelector;
exports.loadSelectors = loadSelectors;
exports.transformSelector = transformSelector;

/**
 * @param  {string} filepath
 * @return {string}
 */
function abspath(filepath) {
  return isRelative(filepath)
    ? resolve(dirname(module.parent.filename), filepath)
    : filepath;
}

/**
 * @param  {string} className
 * @return {string}
 */
function classSelector(className) {
  return '.' + className;
}

/**
 * @param  {string}  filepath
 * @return {boolean}
 */
function isRelative(filepath) {
  return filepath.charAt(0) === '.';
}
