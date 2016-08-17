'use strict';

const { compose, findIndex, identity, isString } = require('lodash/fp');
const { identifyElement } = require('./identify');
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
exports.getValue = getValue;

/* global browser */

/**
 * @param  {string} selector
 * @return {boolean|string}
 */
function getValue(selector) {
  assert(isString(selector));

  switch (identifyElement(selector)) {
  case 'Check':
  case 'Tumbler':
    return getCheckValue(selector);
  case 'Input':
  case 'Select':
    return getInputValue(selector);
  case 'Radio':
    return getRadioValue(selector);
  case 'RadioGroup':
    return getRadioGroupValue(selector);
  }

  const er = new Error(`Unsupported control type \`${selector}\``);
  throw er;
}

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
 * @return {string|null}
 */
function getRadioValue(selector) {
  assert(isString(selector));
  const selectedIndex = getSelectedIndex(selector);

  if (selectedIndex === -1) {
    return null;
  }

  return browser.getAttribute(
    `${Radio.wrapper}:nth-of-type(${selectedIndex}) ${selector}`,
    'value'
  );
}

/**
 * @param {string} selector
 * @return {string|null}
 */
function getRadioGroupValue(selector) {
  assert(isString(selector));
  const selectedIndex = getSelectedIndex(selector);

  if (selectedIndex === -1) {
    return null;
  }

  return browser.getAttribute(
    `${RadioGroup.wrapper}:nth-of-type(${selectedIndex}) ${selector}`,
    'value'
  );
}
