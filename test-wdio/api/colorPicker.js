'use strict';

const { getInputValue } = require('../../tool/getters');
const { getValue, identifyElement, setValue } = require('../../');
const { setInputValue } = require('../../tool/setters');
const assert = require('power-assert');

before(() => browser.url('/colorPicker.html'));

describe('ColorPicker', () => {
  it('setValue()', () => {
    browser.setValue('[name="blue water"]', 'BEBEBE');
    assert(browser.getValue('[name="blue water"]') === 'BEBEBE');
  });

  it('getInputValue() / setInputValue()', () => {
    assert(getInputValue('[name="blue water"]') === 'BEBEBE');
    setInputValue('[name="blue water"]', 'FEFEFE');
    assert(getInputValue('[name="blue water"]') === 'FEFEFE');
  });

  it('identifyElement()', () => {
    assert(identifyElement('[name="blue water"]') === 'Input');
  });

  it('getValue() / setValue()', () => {
    assert(getValue('[name="blue water"]') === 'FEFEFE');
    setValue('[name="blue water"]', 'CCCCCC');
    assert(getValue('[name="blue water"]') === 'CCCCCC');
  });
});
