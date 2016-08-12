'use strict';

const { compose } = require('lodash/fp');

/* global browser */
const getWebElements = compose(browser.elements);

exports.getWebElements = getWebElements;
exports.getValue = getValue;
exports.setValue = setValue;

function getValue() {
  // body...
}

function setValue() {
  // body...
}
