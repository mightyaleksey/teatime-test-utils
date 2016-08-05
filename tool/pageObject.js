'use strict';

const { compose, get } = require('lodash/fp');
const { isEmpty, isObjectLike, isString } = require('lodash');
const assert = require('power-assert');

const getWebElements = compose(webElementWasFound, browser.elements, get('selector'), hasSelector);
const getWebElement = compose(isUniqueWebElement, getWebElements);
const getWebElementId = compose(get('value[0].ELEMENT'), getWebElement);

exports.defineEnumerableProp = defineEnumerableProp;
exports.getWebElement = getWebElement;
exports.getWebElements = getWebElements;
exports.getWebElementId = getWebElementId;

/**
 * @param  {object} context
 * @param  {string} propName
 * @param  {*} propValue
 * @return {object}
 */
function defineEnumerableProp(context, propName, propValue) {
  assert(isObjectLike(context));
  assert(isString(propName));
  assert(propValue);

  Object.defineProperty(context, propName, {
    enumerable: false,
    value: propValue,
  });

  return context;
}

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
