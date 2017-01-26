'use strict';

const {includes, isEmpty, isString, negate} = require('lodash/fp');

const isNotUniqueSelector = includes(',');
const isUniqueSelector = negate(isNotUniqueSelector);

exports.isSelector = isSelector;
exports.isNotUniqueSelector = isNotUniqueSelector;
exports.isUniqueSelector = isUniqueSelector;

function isSelector(selector) {
  if (!isString(selector) || isEmpty(selector)) {
    throw new Error(
      'The valid CSS selector should be non-empty string. ' +
      'Instead got `' + selector + '`'
    );
  }

  return selector;
}
