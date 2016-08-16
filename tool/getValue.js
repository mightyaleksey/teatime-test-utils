'use strict';

const { compose, findIndex, identity, isString } = require('lodash/fp');
const Radio = require('../pageObject/Radio');
const RadioGroup = require('../pageObject/RadioGroup');
const assert = require('power-assert');

const getSelectedIndex = compose(findIndex(identity), browser.isSelected);

exports.getCheckValue = getCheckValue;
exports.getColorPickerValue = getInputValue;
exports.getInputValue = getInputValue;
exports.getRadioValue = getRadioValue;
exports.getRadioGroupValue = getRadioGroupValue;
exports.getSelectValue = getInputValue;
exports.getTumblerValue = getCheckValue;

/* global browser */

/**
 * @param {string} selector
 * @return {boolean}
 */
function getCheckValue(selector) {
  assert(isString(selector));
  return browser.isSelected(selector);
}

/**
 * @param {string} selector
 * @return {string}
 */
function getInputValue(selector) {
  assert(isString(selector));
  return browser.getValue(selector);
}

/**
 * @param {string} selector
 * @return {string}
 */
function getRadioValue(selector) {
  assert(isString(selector));
  const selectedIndex = getSelectedIndex(selector);
  assert(selectedIndex > -1);

  return browser.getAttribute(
    `${Radio.wrapper}:nth-of-type(${selectedIndex}) ${selector}`,
    'value'
  );
}

/**
 * @param {string} selector
 * @return {string}
 */
function getRadioGroupValue(selector) {
  assert(isString(selector));
  const selectedIndex = getSelectedIndex(selector);
  assert(selectedIndex > -1);

  return browser.getAttribute(
    `${RadioGroup.wrapper}:nth-of-type(${selectedIndex}) ${selector}`,
    'value'
  );
}
