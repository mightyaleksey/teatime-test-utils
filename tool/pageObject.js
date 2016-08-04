'use strict';

const { compose, get } = require('lodash/fp');
const { isEmpty, isObjectLike, isString } = require('lodash');
const assert = require('power-assert');

const getWebElements = compose(webElementWasFound, browser.elements, get('selector'), hasSelector);
const getWebElement = compose(isUniqueWebElement, getWebElements);

exports.getWebElement = getWebElement;
exports.getWebElements = getWebElements;

/**
 * @param  {object} pageObject
 * @param  {string} pageObject.selector
 * @return {object}
 */
function hasSelector(pageObject) {
  assert(isObjectLike(pageObject));
  assert(isString(pageObject.selector));
  assert(!isEmpty(pageObject.selector));
  return pageObject;
}

/**
 * @param  {webElementJSONObject} webElement
 * @return {webElementJSONObject}
 */
function isUniqueWebElement(webElementJSONObject) {
  assert(webElementJSONObject.value.length === 1, `selector wasn't unique enough`);
  return webElementJSONObject;
}

/**
 * @param  {webElementJSONObject} webElement
 * @return {webElementJSONObject}
 */
function webElementWasFound(webElementJSONObject) {
  assert(webElementJSONObject.value.length > 0);
  return webElementJSONObject;
}
