'use strict';

const { isBoolean, isString } = require('lodash/fp');
const Select = require('../pageObject/Select');
const assert = require('power-assert');

exports.setCheckValue = setCheckValue;
exports.setColorPickerValue = setInputValue;
exports.setInputValue = setInputValue;
exports.setRadioValue = setRadioValue;
exports.setRadioGroupValue = setRadioValue;
exports.setSelectValue = setSelectValue;
exports.setTumblerValue = setCheckValue;

/* global browser */

/**
 * @param {string} selector
 * @param {boolean} value
 * @return {void}
 */
function setCheckValue(selector, value) {
  assert(isString(selector));
  assert(isBoolean(value));

  if (browser.isSelected(selector) === value) {
    return;
  }

  browser.click(selector + ' + label');
  browser.waitForSelected(selector, null, !value);
}

/**
 * @param {string} selector
 * @param {boolean} value
 * @return {void}
 */
function setInputValue(selector, value) {
  assert(isString(selector));
  assert(isString(value));
  browser.setValue(selector, value);
}

/**
 * @param {string} selector
 * @param {string} value
 * @return {void}
 */
function setRadioValue(selector, value) {
  assert(isString(selector));
  assert(isString(value));
  browser.click(`${selector}[value="${value}"] + label`);
  browser.waitForSelected(`${selector}[value="${value}"]`);
}

/**
 * @param {string} selector
 * @param {string} value
 * @return {void}
 */
function setSelectValue(selector, value) {
  browser.click(`${selector} + ${Select.control}`);
  browser.waitForVisible(`${selector} ~ ${Select.menu}`);

  browser.click(`${selector} ~ ${Select.menu} [data-value="${value}"]`);
  browser.waitForValue(selector);
}
