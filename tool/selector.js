'use strict';

const {
  compose,
  join,
  map,
  mapValues,
  replace,
  split,
  trim,
} = require('lodash/fp');
const { dirname, resolve } = require('path');

const transformFromSelector = compose(trim, replace(/\./g, ' '));
const transformToSelector = compose(join(''), map(classSelector), split(' '));
const loadSelectors = compose(mapValues(transformToSelector), require, abspath);

exports.abspath = abspath;
exports.classSelector = classSelector;
exports.loadSelectors = loadSelectors;
exports.transformFromSelector = transformFromSelector;
exports.transformToSelector = transformToSelector;

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
