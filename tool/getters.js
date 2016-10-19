'use strict';

const { broElements, broGetValue, broIsSelected } = require('./bro');
const { compose, findIndex, identity } = require('lodash/fp');
const { getAttribute, isSelector } = require('./fn');
const Radio = require('../pageObject/Radio');
const RadioGroup = require('../pageObject/RadioGroup');

const getCheckValue = compose(broIsSelected, isSelector);
const getInputValue = compose(broGetValue, isSelector);

compose(findIndex(identity), getCheckValue);

exports.getCheckValue = getCheckValue;
exports.getCheckGroupValue = getCheckGroupValue;
exports.getInputValue = getInputValue;
exports.getRadioValue = getRadioValue;
exports.getRadioGroupValue = getRadioGroupValue;

exports.getters = {
  Check: getCheckValue,
  CheckGroup: getCheckGroupValue,
  Input: getInputValue,
  Radio: getRadioValue,
  RadioGroup: getRadioGroupValue,
  Select: getInputValue,
  Tumbler: getCheckValue,
};

/**
 * @param  {string} selector
 * @return {string[]}
 */
function getCheckGroupValue(selector) {
  isSelector(selector);
  const elements = broElements(selector);
  const states = elements.isSelected();
  return elements.getAttribute(null, 'value').filter((_, i) => states[i]);
}

/**
 * @param  {string} selector
 * @return {string|null}
 */
function getRadioValue(selector) {
  const selectedIndex = findIndex(identity,
    getCheckValue(`${Radio.wrapper} ${selector}`));

  if (selectedIndex === -1) {
    return null;
  }

  return getAttribute('value',
    `${Radio.wrapper}:nth-of-type(${selectedIndex + 1}) ${selector}`);
}

/**
 * @param  {string} selector
 * @return {string|null}
 */
function getRadioGroupValue(selector) {
  const selectedIndex = findIndex(identity,
    getCheckValue(`${RadioGroup.wrapper} ${selector}`));

  if (selectedIndex === -1) {
    return null;
  }

  return getAttribute('value',
    `${RadioGroup.wrapper}:nth-of-type(${selectedIndex + 1}) ${selector}`);
}
