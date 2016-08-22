'use strict';

const {
  Button,
  Check,
  CheckGroup,
  ColorPicker,
  Input,
  Radio,
  RadioGroup,
  Select,
  Spin,
  Textarea,
  Tumbler,
} = require('../../pageObject');
const { isString } = require('lodash/fp');
const test = require('ava');

test('Button', t => {
  t.truthy(isString(Button.action));
  t.truthy(isString(Button.link));
  t.truthy(isString(Button.normal));
});

test('Check', t => {
  t.truthy(isString(Check.native)); // input
  t.truthy(isString(Check.wrapper)); // container
});

test('CheckGroup', t => {
  t.truthy(isString(CheckGroup.container)); // container
  t.truthy(isString(CheckGroup.native)); // input
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

test('Spin', t => {
  t.truthy(isString(Spin));
});

test('Textarea', t => {
  t.truthy(isString(Textarea.control)); // single element
});

test('Tumbler', t => {
  t.truthy(isString(Tumbler.native)); // input
  t.truthy(isString(Tumbler.wrapper)); // container
});
