'use strict';

const {add, compose, join, map, mapValues, split} = require('lodash/fp');
const selector = compose(join(''), map(add('.')), split(' '));
const mapValuesToSelectors = mapValues(selector);

exports.mapValuesToSelectors = mapValuesToSelectors;
exports.selector = selector;
