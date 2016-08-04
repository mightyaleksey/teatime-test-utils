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

Input.prototype = Object.create(Input.prototype, {
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
