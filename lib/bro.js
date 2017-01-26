'use strict';
/* global browser */
exports.click = click;
exports.elements = elements;
exports.getAttribute = getAttribute;
exports.getValue = getValue;
exports.isExisting = isExisting;
exports.isSelected = isSelected;
exports.isVisible = isVisible;
exports.setValue = setValue;
exports.waitForSelected = waitForSelected;
exports.waitForValue = waitForValue;
exports.waitForVisible = waitForVisible;

function click(selector) {
  return browser.click(selector);
}

function elements(selector) {
  return browser.elements(selector);
}

function getAttribute(selector, attributeName) {
  return browser.getAttribute(selector, attributeName);
}

function getValue(selector) {
  return browser.getValue(selector);
}

function isExisting(selector) {
  return browser.isExisting(selector);
}

function isSelected(selector) {
  return browser.isSelected(selector);
}

function isVisible(selector) {
  return browser.isVisible(selector);
}

function setValue(selector, values) {
  return browser.setValue(selector, values);
}

function waitForSelected(selector, delay, reverse) {
  return browser.waitForSelected(selector, delay, reverse);
}

function waitForValue(selector, delay, reverse) {
  return browser.waitForValue(selector, delay, reverse);
}

function waitForVisible(selector, delay, reverse) {
  return browser.waitForVisible(selector, delay, reverse);
}
