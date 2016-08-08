'use strict';

const { defineEnumerableProp, getWebElement } = require('../tool/pageObject');
const { getContextSelector } = require('../tool/selector');
const { loadSelectors } = require('../tool/className');
const { identity, isString } = require('lodash');
const assert = require('power-assert');

const {
  native,
  wrapper,
} = loadSelectors('teatime-components/style/tumbler/tumbler.css');

module.exports = Tumbler;

/**
 * @param  {string} [context]
 * @return {tumbler}
 */
function Tumbler(context = '') {
  if (!(this instanceof Tumbler)) {
    return new Tumbler(context);
  }

  defineEnumerableProp(this, 'getSelector', getContextSelector(context));
}

Tumbler.prototype = Object.create({
  /**
   * @return {tumber}
   */
  check: function () {
    if (!this.isChecked) {
      this.selector = this.getSelector(wrapper);
      browser.click(this.selector);
    }

    return this;
  },

  /**
   * @return {tumber}
   */
  uncheck: function () {
    if (this.isChecked) {
      this.selector = this.getSelector(wrapper);
      browser.click(this.selector);
    }

    return this;
  },

  /**
   * @param  {string} attributeName
   * @return {string}
   */
  getAttribute: function (attributeName) {
    assert(isString(attributeName));

    this.selector = this.getSelector(wrapper);
    return getWebElement(this).getAttribute(null, attributeName);
  },

  /**
   * @param  {string} cssProperty
   * @return {string}
   */
  getCssProperty: function (cssProperty) {
    assert(isString(cssProperty));

    this.selector = this.getSelector(wrapper);
    return getWebElement(this).getCssProperty(null, cssProperty);
  },

  getSelector: identity,
}, {
  elementSize: {
    get: function () {
      this.selector = this.getSelector(wrapper);
      return getWebElement(this).getElementSize();
    },
  },

  isChecked: {
    get: function () {
      this.selector = this.getSelector(wrapper, native);
      return getWebElement(this).isSelected();
    },
  },

  isDisabled: {
    get: function () {
      this.selector = this.getSelector(wrapper, native);
      return !getWebElement(this).isEnabled();
    },
  },

  html: {
    get: function () {
      this.selector = this.getSelector(wrapper);
      return getWebElement(this).getHTML();
    },
  },

  name: {
    get: function () {
      this.selector = this.getSelector(wrapper, native);
      return getWebElement(this).getAttribute(null, 'name');
    },
  },
});

Tumbler.prototype.constructor = Tumbler;
