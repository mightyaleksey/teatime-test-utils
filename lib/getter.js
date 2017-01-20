'use strict';

const {compose} = require('lodash/fp');
const {elements, isSelected, getValue} = require('./bro');
const {isSelector} = require('./check');

const getCheckValue = compose(isSelected, isSelector);
const getInputValue = compose(getValue, isSelector);

exports.getCheckValue = getCheckValue;
exports.getCheckGroupValue = getCheckGroupValue;
exports.getInputValue = getInputValue;

// getCheckGroupValue :: string -> string[]
function getCheckGroupValue(selector) {
  const webElements = elements(selector);
  const state = webElements.isSelected();
  return elements.getValue().filter((_, position) => state[position]);
}
