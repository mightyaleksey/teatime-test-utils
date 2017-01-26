'use strict';
/* global browser */
const {isSelector} = require('./check');

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
  isSelector(selector);
  return browser.click(selector);
}

function elements(selector) {
  isSelector(selector);
  return browser.elements(selector);
}

function getAttribute(selector, attributeName) {
  isSelector(selector);
  return browser.getAttribute(selector, attributeName);
}

function getValue(selector) {
  isSelector(selector);
  return browser.getValue(selector);
}

function isExisting(selector) {
  isSelector(selector);
  return browser.isExisting(selector);
}

function isSelected(selector) {
  isSelector(selector);
  return browser.isSelected(selector);
}

function isVisible(selector) {
  isSelector(selector);
  return browser.isVisible(selector);
}

function setValue(selector, values) {
  isSelector(selector);
  return browser.setValue(selector, values);
}

function waitForSelected(selector, delay, reverse) {
  isSelector(selector);
  return browser.waitForSelected(selector, delay, reverse);
}

function waitForValue(selector, delay, reverse) {
  isSelector(selector);
  return browser.waitForValue(selector, delay, reverse);
}

function waitForVisible(selector, delay, reverse) {
  isSelector(selector);
  return browser.waitForVisible(selector, delay, reverse);
}
