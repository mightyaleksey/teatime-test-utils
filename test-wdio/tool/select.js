'use strict';

const { loadSelectors } = require('../../tool/selector');
const Select = loadSelectors('teatime-components/style/select/select.css');
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
});
