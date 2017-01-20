'use strict';

const {
  arrow: arrowOfSelect,
  baseline: baselineOfSelect,
  menu: menuOfSelect,
} = require('../pageObject/Select');
const {click, waitForSelected, waitForValue, waitForVisible} = require('./bro');
const {control: controlOfCheck} = require('../pageObject/Check');
const {control: controlOfRadio} = require('../pageObject/Radio');
const {getCheckValue} = require('./getter');

exports.setCheckValue = setCheckValue;
exports.setRadioValue = setRadioValue;
exports.setSelectValue = setSelectValue;

// setCheckValue :: string -> bool
function setCheckValue(selector, value) {
  if (getCheckValue(selector) === value) return;
  click(selector + ' + ' + controlOfCheck);
  waitForSelected(selector, null, !value);
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
