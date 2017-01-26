'use strict';

const {findIndex, identity} = require('lodash/fp');
const {elements, isSelected, getValue} = require('./bro');
const {wrapper: wrapperOfRadio} = require('../pageObject/Radio');

const getCheckValue = isSelected;
const getInputValue = getValue;

exports.getCheckValue = getCheckValue;
exports.getCheckGroupValue = getCheckGroupValue;
exports.getInputValue = getInputValue;
exports.getRadioValue = getRadioValue;

// getCheckGroupValue :: string -> string[]
function getCheckGroupValue(selector) {
  const webElements = elements(selector);
  const state = webElements.isSelected();
  return webElements.getAttribute(null, 'value')
    .filter((_, position) => state[position]);
}

// getRadioValue :: string -> string|null
function getRadioValue(selector) {
  const selectedIndex = findIndex(identity, getCheckValue(selector));
  if (selectedIndex === -1) return null;

  return getValue(wrapperOfRadio + ':nth-of-type(' + (selectedIndex + 1) + ') ' + selector);
}
