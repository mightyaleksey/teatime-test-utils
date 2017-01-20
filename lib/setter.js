'use strict';

const {
  click,
  elements,
  setValue,
  waitForSelected,
  waitForValue,
  waitForVisible,
} = require('./bro');
const {forEach, invert} = require('lodash/fp');
const {getCheckValue} = require('./getter');

const {
  arrow: arrowOfSelect,
  baseline: baselineOfSelect,
  menu: menuOfSelect,
} = require('../pageObject/Select');
const {control: controlOfCheck} = require('../pageObject/Check');
const {control: controlOfCheckGroup} = require('../pageObject/CheckGroup');
const {control: controlOfRadio} = require('../pageObject/Radio');

exports.setCheckValue = setCheckValue;
exports.setCheckGroupValue = setCheckGroupValue;
exports.setInputValue = setValue;
exports.setRadioValue = setRadioValue;
exports.setSelectValue = setSelectValue;

// setCheckValue :: string -> bool
function setCheckValue(selector, value) {
  if (getCheckValue(selector) === value) return;
  click(selector + ' + ' + controlOfCheck);
  waitForSelected(selector, null, !value);
}

// setCheckGroupValue :: string -> string[]
function setCheckGroupValue(selector, values) {
  const expectedValues = invert(values);
  const webElements = elements(selector);
  const state = webElements.isSelected();
  const allValues = webElements.getValue();

  const valuesToUpdate = allValues.filter((value, position) =>
    expectedValues.hasOwnProperty(value) !== state[position]);

  const updateValue = value => {
    click(selector + `[value="${value}"]` + ' + ' + controlOfCheckGroup);
    waitForSelected(selector + `[value="${value}"]` + ' + ' + controlOfCheckGroup);
  };

  forEach(updateValue, valuesToUpdate);
}

// setRadioValue :: string -> string
function setRadioValue(selector, value) {
  const radioSelector = selector + `[value="${value}"]`;
  if (getCheckValue(radioSelector) === true) return;
  click(selector + ' + ' + controlOfRadio);
  waitForSelected(selector);
}

// setSelectValue :: string -> string
function setSelectValue(selector, value) {
  click(selector + ' + ' + baselineOfSelect + ' ' + arrowOfSelect);
  waitForVisible(selector + ' ~ ' + menuOfSelect);
  click(selector + ' ~ ' + menuOfSelect + ' ' + `[data-value="${value}"]`);
  waitForValue(selector);
}
