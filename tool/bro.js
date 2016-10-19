'use strict';

exports.broClick = click;
exports.broElements = elements;
exports.broGetAttribute = getAttribute;
exports.broGetValue = getValue;
exports.broIsSelected = isSelected;
exports.broSetValue = setValue;
exports.broWaitForSelected = waitForSelected;
exports.broWaitForValue = waitForValue;
exports.broWaitForVisible = waitForVisible;

/* global browser */

function click() {
  return browser.click.apply(browser, arguments);
}

function elements() {
  return browser.elements.apply(browser, arguments);
}

function getAttribute() {
  return browser.getAttribute.apply(browser, arguments);
}

function getValue() {
  return browser.getValue.apply(browser, arguments);
}

function isSelected() {
  return browser.isSelected.apply(browser, arguments);
}

function setValue() {
  return browser.setValue.apply(browser, arguments);
}

function waitForSelected() {
  return browser.waitForSelected.apply(browser, arguments);
}

function waitForValue() {
  return browser.waitForValue.apply(browser, arguments);
}

function waitForVisible() {
  return browser.waitForVisible.apply(browser, arguments);
}
