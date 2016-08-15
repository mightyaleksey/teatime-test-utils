'use strict';

const assert = require('power-assert');

before(() => browser.url('/tumbler.html'));

describe('Tumbler', () => {
  it('setValue()', () => {
    assert(browser.isSelected('[name="show-images"]') === true);
    browser.click('[name="show-images"] + label');
    browser.waitForSelected('[name="show-images"]', null, true);
    assert(browser.isSelected('[name="show-images"]') === false);
  });
});
