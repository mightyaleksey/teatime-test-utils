'use strict';

const { compose, findIndex, identity } = require('lodash/fp');
const { getAttribute, isSelector } = require('./fn');
const Radio = require('../pageObject/Radio');
const RadioGroup = require('../pageObject/RadioGroup');

/* global browser */
const getCheckValue = compose(browser.isSelected, isSelector);
const getInputValue = compose(browser.getValue, isSelector);

compose(findIndex(identity), getCheckValue);

exports.getCheckValue = getCheckValue;
exports.getCheckGroupValue = getCheckGroupValue;
exports.getInputValue = getInputValue;
exports.getRadioValue = getRadioValue;
exports.getRadioGroupValue = getRadioGroupValue;

exports.getters = {
  isCheck: getCheckValue,
  isCheckGroup: getCheckGroupValue,
  isInput: getInputValue,
  isRadio: getRadioValue,
  isRadioGroup: getRadioGroupValue,
  isSelect: getInputValue,
  isTumbler: getCheckValue,
};

/**
 * @param  {string} selector
 * @return {string[]}
 */
function getCheckGroupValue(selector) {
  isSelector(selector);
  const elements = browser.elements(selector);
  const states = elements.isSelected();
  return elements.getAttribute(null, 'value').filter((_, i) => states[i]);
}

/**
 * @param  {string} selector
 * @return {string|null}
 */
function getRadioValue(selector) {
  const selectedIndex = findIndex(identity, getCheckValue(selector));
  if (selectedIndex === -1) {
    return null;
  }

  return getAttribute('value',
    `${Radio.wrapper}:nth-of-type(${selectedIndex}) ${selector}`);
}

/**
 * @param  {string} selector
 * @return {string|null}
 */
function getRadioGroupValue(selector) {
  const selectedIndex = findIndex(identity, getCheckValue(selector));
  if (selectedIndex === -1) {
    return null;
  }

  return getAttribute('value',
    `${RadioGroup.wrapper}:nth-of-type(${selectedIndex}) ${selector}`);
}
