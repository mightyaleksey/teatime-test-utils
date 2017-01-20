'use strict';

const {arrow, baseline, menu} = require('../pageObject/Select');
const {click, waitForValue, waitForVisible} = require('./bro');

exports.setSelectValue = setSelectValue;

function setSelectValue(selector, value) {
  click(selector + ' + ' + baseline + ' ' + arrow);
  waitForVisible(selector + ' ~ ' + menu);
  click(selector + ' ~ ' + menu + ' ' + `[data-value="${value}"]`);
  waitForValue(selector);
}
