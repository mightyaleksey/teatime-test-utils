'use strict';

const { Select } = require('../pageObject');
const {
  broClick,
  broElements,
  broSetValue,
  broWaitForSelected,
  broWaitForValue,
  broWaitForVisible,
} = require('./bro');
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
  broClick(`${selector} + label`);
  broWaitForSelected(selector, null, !value);
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

  const webElements = broElements(selector);
  const currentState = webElements.isSelected();
  const elementValues = webElements.getAttribute(null, 'value');

  const valuesToUpdate = elementValues.filter((value, pos) =>
    expectedValues.hasOwnProperty(value) !== currentState[pos]);

  forEach(value => {
    broClick(`${selector}[value="${value}"] + label`);
    broWaitForSelected(`${selector}[value="${value}"]`, null,
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
  broSetValue(selector, value);
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

  broClick(`${selector}[value="${value}"] + label`);
  broWaitForSelected(`${selector}[value="${value}"]`);
}

/**
 * @param {string} selector
 * @param {string} value
 * @return {void}
 */
function setSelectValue(selector, value) {
  isSelector(selector);
  broClick(`${selector} + ${Select.control}`);
  broWaitForVisible(`${selector} ~ ${Select.menu}`);

  assert(isString(value));
  broClick(`${selector} ~ ${Select.menu} [data-value="${value}"]`);
  broWaitForValue(selector);
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
  broClick(selector);
  broWaitForSelected(selector, null, !value);
}
