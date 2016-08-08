'use strict';

const { defineEnumerableProp, getWebElement } = require('../tool/pageObject');
const { getContextSelector } = require('../tool/selector');
const { loadSelectors } = require('../tool/className');
const { identity, isString } = require('lodash');
const assert = require('power-assert');

const {
  control,
  wrapper,
} = loadSelectors('teatime-components/style/input/input.css');

module.exports = Input;

/**
 * @param  {string} [context]
 * @return {input}
 */
function Input(context = '') {
  if (!(this instanceof Input)) {
    return new Input(context);
  }

  defineEnumerableProp(this, 'getSelector', getContextSelector(context));
}

Input.prototype = Object.create({
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
      this.selector = this.getSelector(wrapper, control);
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
      this.selector = this.getSelector(wrapper, control);
      return getWebElement(this).getAttribute(null, 'name');
    },
  },

  value: {
    get: function () {
      this.selector = this.getSelector(wrapper, control);
      return getWebElement(this).getValue();
    },
    set: function (value) {
      assert(isString(value));

      this.selector = this.getSelector(wrapper, control);
      getWebElement(this).setValue(null, value);

      return this;
    },
  },
});

Input.prototype.constructor = Input;
