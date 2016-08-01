'use strict';

const assert = require('power-assert');

exports.getElementId = getElementId;

/**
 * @param  {string} selector
 * @return {string}
 */
function getElementId(selector) {
  assert(typeof selector === 'string', '`getElementId` function expects string as an argument');
  assert(selector, '`getElementId` function expects a non-empty selector as an argument');

  const elements = browser.elements(selector);
  assert(elements.value.length > 0, 'element was not found');
  assert(elements.value.length === 1, 'selector should result into unique element');

  return elements.value[0].ELEMENT;
}
