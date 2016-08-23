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
const { is, isSetOfSelectors, isUniqueSelector } = require('./selector');

const isCheck = is(isUniqueSelector, Check.native);
const isCheckGroup = is(isSetOfSelectors, CheckGroup.native);
const isInput = is(isUniqueSelector, Input.control);
const isRadio = is(isSetOfSelectors, Radio.native);
const isRadioGroup = is(isSetOfSelectors, RadioGroup.native);
const isSelect = is(isUniqueSelector, Select.native);
const isTumbler = is(isUniqueSelector, Tumbler.native);

exports.isCheck = isCheck;
exports.isCheckGroup = isCheckGroup;
exports.isInput = isInput;
exports.isRadio = isRadio;
exports.isRadioGroup = isRadioGroup;
exports.isSelect = isSelect;
exports.isTumbler = isTumbler;
