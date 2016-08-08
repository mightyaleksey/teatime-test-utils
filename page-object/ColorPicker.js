'use strict';

const { defineEnumerableProp, getWebElement } = require('../tool/pageObject');
const { getContextSelector } = require('../tool/selector');
const { loadSelectors } = require('../tool/className');
const { identity, isString } = require('lodash');
const assert = require('power-assert');

const {
  container,
  control,
} = loadSelectors('teatime-components/style/color-picker/color-picker.css');

module.exports = ColorPicker;

function ColorPicker(context = '') {
  if (!(this instanceof ColorPicker)) {
    return new ColorPicker(context);
  }

  defineEnumerableProp(this, 'getSelector', getContextSelector(context));
}

ColorPicker.prototype = Object.create({
  getSelector: identity,
}, {
  elementSize: {
    get: function () {
      this.selector = this.getSelector(container);
      return getWebElement(this).getElementSize();
    },
  },

  isDisabled: {
    get: function () {
      this.selector = this.getSelector(container, control);
      return !getWebElement(this).isEnabled();
    },
  },

  html: {
    get: function () {
      this.selector = this.getSelector(container);
      return getWebElement(this).getHTML();
    },
  },

  name: {
    get: function () {
      this.selector = this.getSelector(container, control);
      return getWebElement(this).getAttribute(null, 'name');
    },
  },

  value: {
    get: function () {
      this.selector = this.getSelector(container, control);
      return getWebElement(this).getValue();
    },
    set: function (value) {
      assert(isString(value));

      this.selector = this.getSelector(container, control);
      getWebElement(this).setValue(null, value);

      return this;
    },
  },
});

ColorPicker.prototype.constructor = ColorPicker;
