'use strict';

const { getInputValue } = require('../../tool/getValue');
const { setInputValue } = require('../../tool/setValue');
const assert = require('power-assert');

before(() => browser.url('/input.html'));

describe('Input', () => {
  it('setValue()', () => {
    browser.setValue('[name="active-input"]', 'сизый карась');
    assert(browser.getValue('[name="active-input"]'), 'сизый карась');
  });

  it('getInputValue() / setInputValue()', () => {
    assert(getInputValue('[name="active-input"]') === 'сизый карась');
    setInputValue('[name="active-input"]', 'карамба!');
    assert(getInputValue('[name="active-input"]') === 'карамба!');
  });
});
