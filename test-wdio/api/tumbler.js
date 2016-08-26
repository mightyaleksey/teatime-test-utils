'use strict';

const { getCheckValue } = require('../../tool/getters');
const { getValue, identifyElement, setValue } = require('../../');
const { setTumblerValue } = require('../../tool/setters');
const assert = require('power-assert');

before(() => browser.url('/tumbler.html'));

describe('Tumbler', () => {
  it('setValue()', () => {
    assert(browser.isSelected('[name="show-images"]') === true);
    browser.click('[name="show-images"] + label');
    browser.waitForSelected('[name="show-images"]', null, true);
    assert(browser.isSelected('[name="show-images"]') === false);
  });

  it('getCheckValue() / setTumblerValue()', () => {
    assert(getCheckValue('[name="show-images"]') === false);
    setTumblerValue('[name="show-images"]', true);
    assert(getCheckValue('[name="show-images"]') === true);
  });

  it('identifyElement()', () => {
    assert(identifyElement('[name="show-images"]') === 'Tumbler');
  });

  it('getValue() / setValue()', () => {
    assert(getValue('[name="show-images"]') === true);
    setValue('[name="show-images"]', false);
    assert(getValue('[name="show-images"]') === false);
  });
});
