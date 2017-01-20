'use strict';

const {identify} = require('./lib/identify');
const {isFunction, propertyOf} = require('lodash/fp');
const {getAttribute} = require('./lib/bro');

const getClassName = selector => getAttribute(selector, 'class');

const {
  isCheck,
  isCheckGroup,
  isInput,
  isRadio,
  isSelect,
  isTumbler,
} = require('./lib/identity');
const {
  getCheckValue,
  getCheckGroupValue,
  getInputValue,
} = require('./lib/getter');
const {
  setCheckValue,
  setCheckGroupValue,
  setInputValue,
  setRadioValue,
  setSelectValue,
} = require('./lib/setter');

const identities = {
  Check: isCheck,
  CheckGroup: isCheckGroup,
  Input: isInput,
  Radio: isRadio,
  Select: isSelect,
  Tumbler: isTumbler,
};

const getters = {
  Check: getCheckValue,
  CheckGroup: getCheckGroupValue,
  Input: getInputValue,
  Radio: getCheckValue,
  Select: getInputValue,
  Tumbler: getCheckValue,
};

const setters = {
  Check: setCheckValue,
  CheckGroup: setCheckGroupValue,
  Input: setInputValue,
  Radio: setRadioValue,
  Select: setSelectValue,
  Tumbler: setCheckValue,
};

const getValue = (mapOfGetters = getters, mapOfIdentities = identities) => {
  const getControlGetter = propertyOf(mapOfGetters);
  const getType = identify(mapOfIdentities);

  return selector => {
    const className = getClassName(selector);
    const controlType = getType(className);
    if (!controlType) {
      throw new Error('Unknown control `' + selector + '` `' + className + '`');
    }
    const controlGetter = getControlGetter(controlType);
    if (!isFunction(controlGetter)) {
      throw new Error('Unknown getter for element `' + selector + '` `' + className + '`');
    }
    return controlGetter(selector);
  };
};

const setValue = (mapOfSetters = setters, mapOfIdentities = identities) => {
  const getControlSetter = propertyOf(mapOfSetters);
  const getType = identify(mapOfIdentities);

  return (selector, value) => {
    const className = getClassName(selector);
    const controlType = getType(className);
    if (!controlType) {
      throw new Error('Unknown control `' + selector + '` `' + className + '`');
    }
    const controlSetter = getControlSetter(controlType);
    if (!isFunction(controlSetter)) {
      throw new Error('Unknown setter for element `' + selector + '` `' + className + '`');
    }
    return controlSetter(selector, value);
  };
};

exports.identities = identities;
exports.getters = getters;
exports.setters = setters;

exports.getValue = getValue;
exports.setValue = setValue;
