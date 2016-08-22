'use strict';

const { Select } = require('../pageObject');
const {
  forEach,
  invert,
  isArray,
  isBoolean,
  isString,
} = require('lodash/fp');
const { identifyElement } = require('./identify');
const assert = require('power-assert');

exports.setCheckValue = setCheckValue;
exports.setCheckGroupValue = setCheckGroupValue;
exports.setColorPickerValue = setInputValue;
exports.setInputValue = setInputValue;
exports.setRadioValue = setRadioValue;
exports.setRadioGroupValue = setRadioValue;
exports.setSelectValue = setSelectValue;
exports.setTumblerValue = setTumblerValue;
exports.setValue = setValue;

/* global browser */

/**
 * @param {string} selector
 * @param {boolean|string} value
 * @return {void}
 */
function setValue(selector, value) {
  assert(isString(selector));

  switch (identifyElement(selector)) {
  case 'Check':
    return setCheckValue(selector, value);
  case 'CheckGroup':
    return setCheckGroupValue(selector, value);
  case 'Input':
    return setInputValue(selector, value);
  case 'Radio':
  case 'RadioGroup':
    return setRadioValue(selector, value);
  case 'Select':
    return setSelectValue(selector, value);
  case 'Tumbler':
    return setTumblerValue(selector, value);
  }

  const er = new Error(`Unsupported control type \`${selector}\``);
  throw er;
}

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

/**
 * @param {string} selector
 * @param {boolean} value
 * @return {void}
 */
function setTumblerValue(selector, value) {
  assert(isString(selector));
  assert(isBoolean(value));

  if (browser.isSelected(selector) === value) {
    return;
  }

  browser.click(selector);
  browser.waitForSelected(selector, null, !value);
}
