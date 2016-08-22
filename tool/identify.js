'use strict';

const {
  Check,
  CheckGroup,
  Input,
  Radio,
  RadioGroup,
  Select,
  Tumbler,
} = require('../pageObject');
const { compose, includes, negate, overEvery } = require('lodash/fp');
const { transformToSelector } = require('./selector');

const isMultiple = includes(',');
const isSingle = negate(isMultiple);
const isCheck = overEvery([isSingle, includes(Check.native)]);
const isCheckGroup = overEvery([isMultiple, includes(CheckGroup.native)]);
const isInput = overEvery([isSingle, includes(Input.control)]);
const isRadio = overEvery([isMultiple, includes(Radio.native)]);
const isRadioGroup = overEvery([isMultiple, includes(RadioGroup.native)]);
const isSelect = overEvery([isSingle, includes(Select.native)]);
const isTumbler = overEvery([isSingle, includes(Tumbler.native)]);

const identifyElement = compose(identify, getClassAttribute);

exports.identify = identify;
exports.identifyElement = identifyElement;

/* global browser */

/**
 * @param  {string} selector
 * @return {string|string[]}
 */
function getClassAttribute(selector) {
  return browser.elements(selector).getAttribute(null, 'class');
}

/**
 * @param  {string} classNames is empty in case of absent class attribute
 * @return {string}
 */
function identify(classNames) {
  const selector = transformToSelector(classNames);

  if (isCheck(selector)) {
    return 'Check';
  }

  if (isCheckGroup(selector)) {
    return 'CheckGroup';
  }

  if (isInput(selector)) {
    return 'Input';
  }

  if (isRadio(selector)) {
    return 'Radio';
  }

  if (isRadioGroup(selector)) {
    return 'RadioGroup';
  }

  if (isSelect(selector)) {
    return 'Select';
  }

  if (isTumbler(selector)) {
    return 'Tumbler';
  }

  return null;
}
