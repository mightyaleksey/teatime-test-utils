'use strict';

const { getCheckValue } = require('../../tool/getValue');
const { setCheckValue } = require('../../tool/setValue');
const assert = require('power-assert');

before(() => browser.url('/check.html'));

describe('Check', () => {
  it('browser.setValue()', () => {
    assert(browser.isSelected('[name="inactive-single"]') === false);
    browser.click('[name="inactive-single"] + label');
    browser.waitForSelected('[name="inactive-single"]');
    assert(browser.isSelected('[name="inactive-single"]') === true);
  });

  it('getCheckValue() / setCheckValue()', () => {
    assert(getCheckValue('[name="inactive-single"]') === true);
    setCheckValue('[name="inactive-single"]', false);
    assert(getCheckValue('[name="inactive-single"]') === false);
  });
});
