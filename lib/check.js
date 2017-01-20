'use strict';

const {isEmpty, isString} = require('lodash/fp');

exports.isSelector = isSelector;

function isSelector(selector) {
  if (!isString(selector) || isEmpty(selector)) {
    throw new Error(
      'The valid CSS selector should non-empty string. ' +
      'Instead got `' + selector + '`'
    );
  }

  return selector;
}
