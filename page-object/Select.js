'use strict';

const { defineEnumerableProp, getWebElement } = require('../tool/pageObject');
const { getContextSelector } = require('../tool/selector');
const { loadSelectors } = require('../tool/className');
const { identity, isString } = require('lodash');
const assert = require('power-assert');

const {
  native,
  wrapper,
} = loadSelectors('teatime-components/style/select/select.css');

module.exports = Select;

/**
 * @param  {string} [context]
 * @return {select}
 */
function Select(context = '') {
  if (!(this instanceof Select)) {
    return new Select(context);
  }

  defineEnumerableProp(this, 'getSelector', getContextSelector(context));
}

Select.prototype = Object.create({
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

  value: {
    get: function () {
      this.selector = this.getSelector(wrapper, native);
      return getWebElement(this).getValue();
    },
    set: function () {},
  },
});

Select.prototype.constructor = Select;
