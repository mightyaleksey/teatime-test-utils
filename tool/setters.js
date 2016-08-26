'use strict';

const { Select } = require('../pageObject');
const { forEach, invert, isArray, isBoolean, isString } = require('lodash/fp');
const { getCheckValue } = require('./getters');
const { isSelector } = require('./fn');
const assert = require('power-assert');

exports.setCheckValue = setCheckValue;
exports.setCheckGroupValue = setCheckGroupValue;
exports.setInputValue = setInputValue;
exports.setRadioValue = setRadioValue;
exports.setSelectValue = setSelectValue;
exports.setTumblerValue = setTumblerValue;

exports.setters = {
  Check: setCheckValue,
  CheckGroup: setCheckGroupValue,
  Input: setInputValue,
  Radio: setRadioValue,
  RadioGroup: setRadioValue,
  Select: setSelectValue,
  Tumbler: setTumblerValue,
};

/* global browser */

/**
 * @param {string} selector
 * @param {boolean} value
 * @return {void}
 */
function setCheckValue(selector, value) {
  if (getCheckValue(selector) === value) {
    return;
  }

  assert(isBoolean(value));
  browser.click(`${selector} + label`);
  browser.waitForSelected(selector, null, !value);
}

/**
 * @param {string} selector
 * @param {string[]} values
 * @return {void}
 */
function setCheckGroupValue(selector, values) {
  assert(isString(selector));
  assert(isArray(values));

  const expectedValues = invert(values);
  assert(Object.keys(expectedValues).length === values.length,
    'should use unique values');

  const webElements = browser.elements(selector);
  const currentState = webElements.isSelected();
  const elementValues = webElements.getAttribute(null, 'value');

  const valuesToUpdate = elementValues.filter((value, pos) =>
    expectedValues.hasOwnProperty(value) !== currentState[pos]);

  forEach(value => {
    browser.click(`${selector}[value="${value}"] + label`);
    browser.waitForSelected(`${selector}[value="${value}"]`, null,
      !expectedValues.hasOwnProperty(value));
  }, valuesToUpdate);
}

/**
 * @param {string} selector
 * @param {string} value
 * @return {void}
 */
function setInputValue(selector, value) {
  isSelector(selector);
  assert(isString(value));
  browser.setValue(selector, value);
}

/**
 * @param {string} selector
 * @param {string} value
 * @return {void}
 */
function setRadioValue(selector, value) {
  assert(isString(value));
  if (getCheckValue(`${selector}[value="${value}"]`)) {
    return;
  }

  browser.click(`${selector}[value="${value}"] + label`);
  browser.waitForSelected(`${selector}[value="${value}"]`);
}

/**
 * @param {string} selector
 * @param {string} value
 * @return {void}
 */
function setSelectValue(selector, value) {
  isSelector(selector);
  browser.click(`${selector} + ${Select.control}`);
  browser.waitForVisible(`${selector} ~ ${Select.menu}`);

  assert(isString(value));
  browser.click(`${selector} ~ ${Select.menu} [data-value="${value}"]`);
  browser.waitForValue(selector);
}

/**
 * @param {string} selector
 * @param {boolean} value
 * @return {void}
 */
function setTumblerValue(selector, value) {
  if (getCheckValue(selector) === value) {
    return;
  }

  assert(isBoolean(value));
  browser.click(selector);
  browser.waitForSelected(selector, null, !value);
}
