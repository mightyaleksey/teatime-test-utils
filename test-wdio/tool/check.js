'use strict';

const assert = require('power-assert');

before(() => browser.url('/check.html'));

describe('Check', () => {
  it('setValue()', () => {
    assert(browser.isSelected('[name="inactive-single"]') === false);
    browser.click('[name="inactive-single"] + label');
    browser.waitForSelected('[name="inactive-single"]');
    assert(browser.isSelected('[name="inactive-single"]') === true);
  });
});
