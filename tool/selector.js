'use strict';

const {
  add,
  compose,
  curry,
  filter,
  includes,
  join,
  map,
  mapValues,
  negate,
  overEvery,
  split,
} = require('lodash/fp');

const is = curry((predicate, selector) =>
  overEvery([predicate, includes(selector)]));

const isSetOfSelectors = includes(',');
const isUniqueSelector = negate(isSetOfSelectors);

const toClassSelector = add('.');
const toSelector = compose(join(''), map(toClassSelector), filter(Boolean), split(' '));
const getSelectors = compose(mapValues(toSelector), require);

exports.getSelectors = getSelectors;
exports.is = is;
exports.isSetOfSelectors = isSetOfSelectors;
exports.isUniqueSelector = isUniqueSelector;
exports.toClassSelector = toClassSelector;
exports.toSelector = toSelector;
