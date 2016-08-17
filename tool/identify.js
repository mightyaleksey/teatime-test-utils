'use strict';

const {
  Check,
  Input,
  Radio,
  RadioGroup,
  Select,
  Tumbler,
} = require('../pageObject');
const { compose, curryRightN, includes } = require('lodash/fp');
const { transformToSelector } = require('./selector');

const isCheck = includes(Check.native);
const isInput = includes(Input.control);
const isRadio = includes(Radio.native);
const isRadioGroup = includes(RadioGroup.native);
const isSelect = includes(Select.native);
const isTumbler = includes(Tumbler.native);

/* global browser */
const getClassAttribute = curryRightN(2, browser.getAttribute)('class');
const identifyElement = compose(identify, getClassAttribute);

exports.identify = identify;
exports.identifyElement = identifyElement;

/**
 * @param  {string} classNames is empty in case of absent class attribute
 * @return {string}
 */
function identify(classNames) {
  const selector = transformToSelector(classNames);

  if (isCheck(selector)) {
    return 'Check';
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
