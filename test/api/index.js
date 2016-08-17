'use strict';

const {
  Check,
  ColorPicker,
  Input,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  Tumbler,
} = require('../../pageObject');
const { isString } = require('lodash/fp');
const test = require('ava');

test('Check', t => {
  t.truthy(isString(Check.native)); // input
  t.truthy(isString(Check.wrapper)); // container
});

test('ColorPicker', t => {
  t.truthy(isString(ColorPicker.container)); // container
  t.truthy(isString(ColorPicker.control)); // input
});

test('Input', t => {
  t.truthy(isString(Input.control)); // input
  t.truthy(isString(Input.wrapper)); // container
});

test('Radio', t => {
  t.truthy(isString(Radio.container)); // container
  t.truthy(isString(Radio.native)); // input
});

test('RadioGroup', t => {
  t.truthy(isString(RadioGroup.container)); // container
  t.truthy(isString(RadioGroup.native)); // input
});

test('Select', t => { // input is hidden
  t.truthy(isString(Select.wrapper)); // container
});

test('Textarea', t => {
  t.truthy(isString(Textarea.control)); // single element
});

test('Tumbler', t => {
  t.truthy(isString(Tumbler.native)); // input
  t.truthy(isString(Tumbler.wrapper)); // container
});
