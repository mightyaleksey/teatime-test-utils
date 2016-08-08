'use strict';

const { defineEnumerableProp, getWebElement } = require('../tool/pageObject');
const { getContextSelector } = require('../tool/selector');
const { loadSelectors } = require('../tool/className');
const { identity, isString } = require('lodash');
const assert = require('power-assert');

const {
  control,
  label,
  native,
  wrapper,
} = loadSelectors('teatime-components/style/check/check.css');

module.exports = Check;

/**
 * @param  {string} [context]
 * @return {check}
 */
function Check(context = '') {
  if (!(this instanceof Check)) {
    return new Check(context);
  }

  defineEnumerableProp(this, 'getSelector', getContextSelector(context));
}

Check.prototype = Object.create({
  check: function () {
    if (!this.isChecked && !this.isDisabled) {
      this.selector = this.getSelector(wrapper, control);
      browser.click(this.selector);
      this.selector = this.getSelector(wrapper, native);
      browser.waitForSelected(this.selector, null, false);
    }

    return this;
  },

  uncheck: function () {
    if (this.isChecked && !this.isDisabled) {
      this.selector = this.getSelector(wrapper, control);
      browser.click(this.selector);
      this.selector = this.getSelector(wrapper, native);
      browser.waitForSelected(this.selector, null, true);
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

  text: {
    get: function () {
      this.selector = this.getSelector(wrapper, label);
      return getWebElement(this).getText();
    },
  },
});

Check.prototype.constructor = Check;
