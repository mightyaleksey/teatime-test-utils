'use strict';

const {
  compose,
  curry,
  curryN,
  every,
  findLastIndex,
  get,
  isEqual,
  last,
  some,
} = require('lodash/fp');
const { className } = require('./className');
const { includes, overEvery, overSome } = require('lodash');
const { parse, stringify } = require('css-selector-tokenizer');
const assert = require('power-assert');

const SPACING = {
  type: 'spacing',
  value: ' ',
};

const SUITABLE_DELIMITERS = [
  'operator',
  'spacing',
];

const SUITABLE_PSEUDO_CLASSES = [
  'first-child',
  'first-of-type',
  'last-child',
  'last-of-type',
  'nth-child',
  'nth-last-child',
  'valid',
];

const contains = curryN(2, includes);
const getType = get('type');

const isAttributeSelector = compose(isEqual('attribute'), getType);

const isDelimiter = contains(SUITABLE_DELIMITERS);
const isDelimiterSelector = compose(isDelimiter, getType);
const findDelimiterIndex = findLastIndex(isDelimiterSelector);

const isPseudoClassSelector = compose(isEqual('pseudo-class'), getType);
const isSuitablePseudoClass = contains(SUITABLE_PSEUDO_CLASSES);
const isSuitablePseudoClassSelector = overEvery([
  compose(isSuitablePseudoClass, get('name')),
  isPseudoClassSelector,
]);

const isSuitableSelector = overSome([
  isAttributeSelector,
  isSuitablePseudoClassSelector,
]);

const areSuitableSelectors = every(isSuitableSelector);

exports.getContextSelector = curry(getContextSelector);
exports.isAttributeSelector = isAttributeSelector;
exports.isPseudoClassSelector = isPseudoClassSelector;
exports.isDelimiter = isDelimiter;
exports.isDelimiterSelector = isDelimiterSelector;
exports.isSuitablePseudoClass = isSuitablePseudoClass;
exports.isSuitablePseudoClassSelector = isSuitablePseudoClassSelector;
exports.isSuitableSelector = isSuitableSelector;

/**
 * @param  {string} contextSelector
 * @param  {string} parentClassName
 * @param  {string} childClassName
 * @return {string}
 */
function getContextSelector(contextSelector, parentClassName, childClassName = '') {
  assert(typeof contextSelector === 'string');
  assert(typeof parentClassName === 'string');
  assert(typeof childClassName === 'string');

  const selectors = parse(contextSelector);
  const selector = last(selectors.nodes);
  var result;

  if (!isSuitableSelector(last(selector.nodes))) {
    result = contextSelector + ' ' + parentClassName;
  } else {
    const delimiterIndex = findDelimiterIndex(selector.nodes);
    if (areSuitableSelectors(selector.nodes.slice(delimiterIndex + 1))) {
      selector.nodes.splice(delimiterIndex + 1, 0, getClassToken(parentClassName));
      result = stringify(selectors);
    } else {
      result = contextSelector + ' ' + parentClassName;
    }
  }

  if (childClassName) {
    result += ' ' + childClassName;
  }

  return result.trim();
}

/**
 * @param  {string} className
 * @return {object}
 */
function getClassToken(classNameSelector) {
  return {
    type: 'class',
    name: className(classNameSelector),
  };
}
