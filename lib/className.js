'use strict';

const {add, compose, join, map, mapValues, split} = require('lodash/fp');
const toSelector = compose(join(''), map(add('.')), split(' '));
const mapValuesToSelectors = mapValues(selector);

exports.mapValuesToSelectors = mapValuesToSelectors;
exports.selector = selector;

function selector(classProperty) {
  if (!classProperty) return '';
  return toSelector(classProperty);
}
