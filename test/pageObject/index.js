'use strict';

const {
  Button,
  Check,
  CheckGroup,
  ColorPicker,
  Input,
  Radio,
  Select,
  Spin,
  Textarea,
  Tumbler,
} = require('../../pageObject');
const { isString } = require('lodash/fp');
const test = require('tape');

test('Button', t => {
  t.ok(isString(Button.action));
  t.ok(isString(Button.link));
  t.ok(isString(Button.normal));
  t.end();
});

test('Check', t => {
  t.ok(isString(Check.native)); // input
  t.ok(isString(Check.wrapper)); // container
  t.end();
});

test('CheckGroup', t => {
  t.ok(isString(CheckGroup.container)); // container
  t.ok(isString(CheckGroup.native)); // input
  t.end();
});

test('ColorPicker', t => {
  t.ok(isString(ColorPicker.container)); // container
  t.ok(isString(ColorPicker.control)); // input
  t.end();
});

test('Input', t => {
  t.ok(isString(Input.control)); // input
  t.ok(isString(Input.wrapper)); // container
  t.end();
});

test('Radio', t => {
  t.ok(isString(Radio.container)); // container
  t.ok(isString(Radio.native)); // input
  t.end();
});

test('Select', t => { // input is hidden
  t.ok(isString(Select.wrapper)); // container
  t.end();
});

test('Spin', t => {
  t.ok(isString(Spin));
  t.end();
});

test('Textarea', t => {
  t.ok(isString(Textarea.control)); // single element
  t.end();
});

test('Tumbler', t => {
  t.ok(isString(Tumbler.native)); // input
  t.ok(isString(Tumbler.wrapper)); // container
  t.end();
});
