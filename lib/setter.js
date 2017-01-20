'use strict';

const {arrow, baseline, menu} = require('../pageObject/Select');
const {click, waitForSelected, waitForValue, waitForVisible} = require('./bro');
const {control} = require('../pageObject/Check');
const {getCheckValue} = require('./getter');

exports.setCheckValue = setCheckValue;
exports.setSelectValue = setSelectValue;

function setCheckValue(selector, value) {
  if (getCheckValue(selector) === value) return;
  click(selector + ' + ' + control);
  waitForSelected(selector, null, !value);
}

function setSelectValue(selector, value) {
  click(selector + ' + ' + baseline + ' ' + arrow);
  waitForVisible(selector + ' ~ ' + menu);
  click(selector + ' ~ ' + menu + ' ' + `[data-value="${value}"]`);
  waitForValue(selector);
}
