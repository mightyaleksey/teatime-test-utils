'use strict';

const { getInputValue } = require('../../tool/getters');
const { getSelectors } = require('../../tool/selector');
const { getValue, identifyElement, setValue } = require('../../');
const { setSelectValue } = require('../../tool/setters');
const Select = getSelectors('teatime-components/style/select/select.css');
const assert = require('power-assert');

before(() => browser.url('/select.html'));

describe('Select', () => {
  it('setValue()', () => {
    browser.click(`[name="cities"] + ${Select.control}`);
    browser.waitForVisible(`[name="cities"] ~ ${Select.menu}`);

    browser.click(`[name="cities"] ~ ${Select.menu} [data-value="barnaul"]`);
    browser.waitForValue('[name="cities"]');
    assert(browser.getValue('[name="cities"]'), 'barnaul');
  });

  it('setValue() #searchable', () => {
    browser.click(`[name="searchable-cities"] + ${Select.control}`);
    browser.waitForVisible(`[name="searchable-cities"] ~ ${Select.menu}`);

    browser
      .click(`[name="searchable-cities"] ~ ${Select.menu} [data-value="perm"]`);
    browser.waitForValue('[name="searchable-cities"]');
    assert(browser.getValue('[name="searchable-cities"]'), 'perm');
  });

  it('getInputValue() / setSelectValue()', () => {
    assert(getInputValue('[name="cities"]') === 'barnaul');
    setSelectValue('[name="cities"]', 'yeysk');
    assert(getInputValue('[name="cities"]') === 'yeysk');
  });

  it('getInputValue() / setSelectValue() #searchable', () => {
    assert(getInputValue('[name="searchable-cities"]') === 'perm');
    setSelectValue('[name="searchable-cities"]', 'nyagan');
    assert(getInputValue('[name="searchable-cities"]') === 'nyagan');
  });

  it('identifyElement()', () => {
    assert(identifyElement('[name="cities"]') === 'Select');
    assert(identifyElement('[name="searchable-cities"]') === 'Select');
  });

  it('getValue() / setValue()', () => {
    assert(getValue('[name="cities"]') === 'yeysk');
    setValue('[name="cities"]', 'rybinsk');
    assert(getValue('[name="cities"]') === 'rybinsk');
  });

  it('getValue() / setValue() #searchable', () => {
    assert(getValue('[name="searchable-cities"]') === 'nyagan');
    setValue('[name="searchable-cities"]', 'sibay');
    assert(getValue('[name="searchable-cities"]') === 'sibay');
  });
});
