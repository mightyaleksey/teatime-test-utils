'use strict';

const {
  click,
  elements,
  isExisting,
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
  search: searchOfSelect,
} = require('../pageObject/Select');
const {control: controlOfCheck} = require('../pageObject/Check');
const {control: controlOfCheckGroup} = require('../pageObject/CheckGroup');
const {control: controlOfRadio} = require('../pageObject/Radio');
const {control: controlOfTumbler} = require('../pageObject/Tumbler');

exports.setCheckValue = setCheckValue;
exports.setCheckGroupValue = setCheckGroupValue;
exports.setInputValue = setValue;
exports.setRadioValue = setRadioValue;
exports.setSelectValue = setSelectValue;
exports.setTumblerValue = setTumblerValue;

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
  const allValues = webElements.getAttribute(null, 'value');

  const valuesToUpdate = allValues.filter((value, position) =>
    expectedValues.hasOwnProperty(value) !== state[position]);

  const updateValue = value => {
    click(selector + `[value="${value}"]` + ' + ' + controlOfCheckGroup);
    waitForSelected(selector + `[value="${value}"]` + ' + ' + controlOfCheckGroup,
      null, !expectedValues.hasOwnProperty(value));
  };

  forEach(updateValue, valuesToUpdate);
}

// setRadioValue :: string -> string
function setRadioValue(selector, value) {
  const radioSelector = selector + `[value="${value}"]`;
  if (getCheckValue(radioSelector) === true) return;
  click(radioSelector + ' + ' + controlOfRadio);
  waitForSelected(radioSelector);
}

// setSelectValue :: string -> string
function setSelectValue(selector, value) {
  const searchSelector = selector + ' + ' + baselineOfSelect + ' ' + searchOfSelect;
  if (isExisting(searchSelector)) {
    setValue(searchSelector, value);
    waitForValue(searchSelector);
    waitForVisible(selector + ' ~ ' + menuOfSelect);
  } else {
    click(selector + ' + ' + baselineOfSelect + ' ' + arrowOfSelect);
    waitForVisible(selector + ' ~ ' + menuOfSelect);
  }

  click(selector + ' ~ ' + menuOfSelect + ' ' + `[data-value="${value}"]`);
  waitForValue(selector);
}

// setTumblerValue :: string -> bool
function setTumblerValue(selector, value) {
  if (getCheckValue(selector) === value) return;
  click(selector + ' + ' + controlOfTumbler);
  waitForSelected(selector, null, !value);
}
