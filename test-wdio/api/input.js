'use strict';

const { getValue, identifyElement, setValue } = require('../../');
const { getInputValue } = require('../../tool/getters');
const { setInputValue } = require('../../tool/setters');
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

  it('identifyElement()', () => {
    assert(identifyElement('[name="active-input"]') === 'Input');
  });

  it('getValue() / setValue()', () => {
    assert(getValue('[name="active-input"]') === 'карамба!');
    setValue('[name="active-input"]', 'синеватый');
    assert(getValue('[name="active-input"]') === 'синеватый');
  });
});
