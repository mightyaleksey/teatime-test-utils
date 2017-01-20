'use strict';
/* global browser */
exports.click = click;
exports.getAttribute = getAttribute;
exports.getValue = getValue;
exports.isSelected = isSelected;
exports.setValue = setValue;
exports.waitForSelected = waitForSelected;
exports.waitForValue = waitForValue;
exports.waitForVisible = waitForVisible;

function click(selector) {
  return browser.click(selector);
}

function getAttribute(selector, attributeName) {
  return browser.getAttribute(selector, attributeName);
}

function getValue(selector) {
  return browser.getValue(selector);
}

function isSelected(selector) {
  return browser.isSelected(selector);
}

function setValue(selector, values) {
  return browser.setValue(selector, values);
}

function waitForSelected(selector) {
  return browser.waitForSelected(selector);
}

function waitForValue(selector) {
  return browser.waitForValue(selector);
}

function waitForVisible(selector) {
  return browser.waitForVisible(selector);
}
