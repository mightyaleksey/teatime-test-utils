'use strict';

const {
  defineEnumerableProp,
  getWebElement,
  getWebElements,
} = require('../tool/pageObject');
const { every, findIndex, identity, isString, negate } = require('lodash');
const { getContextSelector } = require('../tool/selector');
const { loadSelectors } = require('../tool/className');
const assert = require('power-assert');

const {
  container,
  control,
  native,
  wrapper,
} = loadSelectors('teatime-components/style/radio-group/radio-group.css');

module.exports = RadioGroup;

function RadioGroup(context = '') {
  if (!(this instanceof RadioGroup)) {
    return new RadioGroup(context);
  }

  defineEnumerableProp(this, 'getSelector', getContextSelector(context));
}

RadioGroup.prototype = Object.create({
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
      this.selector = this.getSelector(container, native);
      return every(getWebElements(this).isEnabled(), negate(identity));
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
      this.selector = this.getSelector(container,
        `${wrapper}:first-child ${native}`);

      return getWebElement(this).getAttribute(null, 'name');
    },
  },

  value: {
    get: function () {
      this.selector = this.getSelector(container, native);

      const values = getWebElements(this).isSelected();
      const index = findIndex(values, identity);

      if (index === -1) {
        return null;
      }

      this.selector = this.getSelector(container,
        `${wrapper}:nth-child(${index + 1}) ${native}`);

      return getWebElement(this).getValue();
    },
    set: function (value) {
      assert(isString(value));

      this.selector = this.getSelector(container,
        `${native}[value="${value}"]+${control}`);

      browser.click(this.selector);

      this.selector = this.getSelector(container,
        `${native}[value="${value}"]`);

      browser.waitForSelected(this.selector);

      return this;
    },
  },
});

RadioGroup.prototype.constructor = RadioGroup;
