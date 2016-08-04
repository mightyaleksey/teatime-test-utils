'use strict';

const { control, wrapper } = require('teatime-components/style/input/input.css');
const { getWebElement } = require('../tool/pageObject');
const { isString } = require('lodash');
const assert = require('power-assert');
const className = require('../tool/className');

module.exports = Input;

function Input() {
  if (!(this instanceof Input)) {
    return new Input();
  }
}

Input.prototype = Object.create({
  /**
   * @param  {string} attributeName
   * @return {string}
   */
  getAttribute: function (attributeName) {
    assert(isString(attributeName));

    this.selector = className(wrapper);
    return getWebElement(this).getAttribute(null, attributeName);
  },

  /**
   * @param  {string} attributeName
   * @return {string}
   */
  getCssProperty: function (cssProperty) {
    assert(isString(cssProperty));

    this.selector = className(wrapper);
    return getWebElement(this).getCssProperty(null, cssProperty);
  },
}, {
  elementSize: {
    get: function () {
      this.selector = className(wrapper);
      return getWebElement(this).getElementSize();
    },
  },

  isDisabled: {
    get: function () {
      this.selector = className(control);
      return getWebElement(this).getAttribute(null, 'disabled');
    },
  },

  html: {
    get: function () {
      this.selector = className(control);
      return getWebElement(this).getHtml();
    },
  },

  name: {
    get: function () {
      this.selector = className(control);
      return getWebElement(this).getAttribute(null, 'name');
    },
  },

  tagName: {
    get: function () {
      this.selector = className(control);
      return getWebElement(this).getTagName();
    },
  },

  text: {
    get: function () {
      this.selector = className(wrapper);
      return getWebElement(this).getText();
    },
  },

  value: {
    get: function () {
      this.selector = className(control);
      return getWebElement(this).getValue();
    },
    set: function (value) {
      assert(isString(value));

      this.selector = className(control);
      getWebElement(this).setValue(null, value);

      return this;
    },
  },
});
