'use strict';

const { defineEnumerableProp, getWebElement } = require('../tool/pageObject');
const { getContextSelector } = require('../tool/selector');
const { loadSelectors } = require('../tool/className');
const { identity, isString } = require('lodash');
const assert = require('power-assert');

const { control } = loadSelectors('teatime-components/style/textarea/textarea.css');

module.exports = Textarea;

/**
 * @param {string} [context]
 */
function Textarea(context = '') {
  if (!(this instanceof Textarea)) {
    return new Textarea(context);
  }

  defineEnumerableProp(this, 'getSelector', getContextSelector(context));
}

Textarea.prototype = Object.create({
  /**
   * @param  {string} attributeName
   * @return {string}
   */
  getAttribute: function (attributeName) {
    assert(isString(attributeName));

    this.selector = this.getSelector(control);
    return getWebElement(this).getAttribute(null, attributeName);
  },

  /**
   * @param  {string} attributeName
   * @return {string}
   */
  getCssProperty: function (cssProperty) {
    assert(isString(cssProperty));

    this.selector = this.getSelector(control);
    return getWebElement(this).getCssProperty(null, cssProperty);
  },

  getSelector: identity,
}, {
  elementSize: {
    get: function () {
      this.selector = this.getSelector(control);
      return getWebElement(this).getElementSize();
    },
  },

  isDisabled: {
    get: function () {
      this.selector = this.getSelector(control);
      return !getWebElement(this).isEnabled();
    },
  },

  html: {
    get: function () {
      this.selector = this.getSelector(control);
      return getWebElement(this).getHTML();
    },
  },

  name: {
    get: function () {
      this.selector = this.getSelector(control);
      return getWebElement(this).getAttribute(null, 'name');
    },
  },

  value: {
    get: function () {
      this.selector = this.getSelector(control);
      return getWebElement(this).getValue();
    },
    set: function (value) {
      assert(isString(value));

      this.selector = this.getSelector(control);
      getWebElement(this).setValue(null, value);

      return this;
    },
  },
});

Textarea.prototype.constructor = Textarea;
